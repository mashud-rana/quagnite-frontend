import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { userLoggedIn, userLoggedOut } from "../features/auth/authSlice";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://quagnite-backend.test/api/v1";

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.access_token;
    if (token) headers.set("authorization", `Bearer ${token}`);
    return headers;
  },
  credentials: "include", // so refresh cookie is sent
});



const baseQueryWithReauth = async (args, api, extraOptions) => {
  // 🔹 First attempt the request
  let result = await baseQuery(args, api, extraOptions);

  // 🔸 If 401 (Unauthorized), try refreshing token
  if (result?.error?.status === 401 || result?.error?.status === "FETCH_ERROR") {
    const refresh_token = api.getState().auth.refresh_token;
    console.log("🔁 Token expired, attempting refresh...");

    try {
      // 🔹 Use fetch() to call refresh endpoint directly
      const refreshResponse = await fetch(`${baseUrl}/user-auth/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ refresh_token }),
      });

      if (!refreshResponse.ok) {
         api.dispatch(userLoggedOut())
        throw new Error("Failed to refresh token");
      }

      const refreshData = await refreshResponse.json();

      // 🔹 If new token received, update store
      if (refreshData?.access_token) {
        api.dispatch(
          userLoggedIn({
            user: refreshData.user,
            access_token: refreshData.access_token,
            refresh_token: refreshData.refresh_token,
          })
        );

        // 🔁 Retry the original request with new token
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(userLoggedOut());
      }
    } catch (error) {
      console.error("Refresh token error:", error);
      api.dispatch(userLoggedOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
  tagTypes: ['auth-user'],
});



// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.NEXT_PUBLIC_API_URL,
//     prepareHeaders: (headers, { getState, endpoint }) => {
//       const token = getState()?.auth?.token;
//       if (token) {
//         headers.set("authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({}),
//   tagTypes: [],
// });

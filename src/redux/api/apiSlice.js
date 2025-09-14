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
  let result = await baseQuery(args, api, extraOptions);
  
  if (result?.error?.status === 401) {
    // try refresh
    const refreshResult = await baseQuery(
      { url: "/user-auth/refresh", method: "POST" },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      api.dispatch(
        userLoggedIn({
          user: refreshResult.data?.user,
          access_token: refreshResult.data?.access_token,
          refresh_token: refreshResult.data?.refresh_token,
        })
      );
      // retry original request
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(userLoggedOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
  tagTypes: [],
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

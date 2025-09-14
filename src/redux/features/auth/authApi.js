import { apiSlice } from "@/redux/api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/user-auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          
          dispatch(
            userLoggedIn({
              user: result?.data?.user,
              access_token: result?.data?.access_token,
              refresh_token: result?.data?.refresh_token,
            })
          );
        
        } catch (error) {}
      },
    }),

    logOut: builder.query({
      query: () => ({
        url: "/logout",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogOutQuery } = authApi;

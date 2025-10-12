import { apiSlice } from "@/redux/api/apiSlice";
import { userLoggedIn, userLoggedOut } from "./authSlice";

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

    socialLogin: builder.mutation({
      query: (data) => ({
        url: "/auth/social-login",
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

    // logOut: builder.query({
    //   query: () => ({
    //     url: "/logout",
    //     method: "GET",
    //   }),
    // }),
    forgetPassword: builder.mutation({
      query: (data) => ({
        url: "/forget-password",
        method: "POST",
        body: data,
      }),
    
    }),
    verifyToken: builder.query({
      query: ({ token }) => ({
        url: `/reset-password/${token}/verify`,
        method: "GET",
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/reset-password",
        method: "POST",
        body: data,
      }),
    
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST"
      }),
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/user-auth/register",
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
    
  }),
});

export const {
  useLoginMutation,
  useForgetPasswordMutation,
  useVerifyTokenQuery,
  useResetPasswordMutation,
  useLogoutMutation,
  useRegisterUserMutation,
    useSocialLoginMutation,
} = authApi;

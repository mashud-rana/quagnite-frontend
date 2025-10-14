import { apiSlice } from "@/redux/api/apiSlice";
import { updateUser } from "../../auth/authSlice";

export const profileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
  

    getProfileDetails: builder.query({
      query: () => ({
        url: "/student/get-profile-details",
        method: "GET",
      }),
      providesTags: ['auth-user']
    }),
    profileUpdate:builder.mutation({
        query: ({data,userId}) => {
            return {
                url: `/student/update-profile/${userId}`,
                method: "POST",
                body: data
            }
        },
        invalidatesTags:['auth-user'],
        async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            try {
                const result = await queryFulfilled;
              
                if(result?.data?.success) {
                  dispatch(updateUser(result?.data?.data));
                }
            } catch (error) { }
        },
      }),
      profileUpdatePhoto:builder.mutation({
        query: ({data,userId}) => {
            return {
                url: `/student/update-profile-photo/${userId}`,
                method: "POST",
                body: data
            }
        },
        invalidatesTags:['auth-user'],
        async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            try {
                const result = await queryFulfilled;
              
                if(result?.data?.success) {
                  dispatch(updateUser(result?.data?.data));
                }
            } catch (error) { }
        },
      }),
      profileUpdatePassword:builder.mutation({
        query: ({data,userId}) => {
            return {
                url: `/student/password/update/${userId}`,
                method: "POST",
                body: data
            }
        },
        invalidatesTags:['auth-user'],
          async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            try {
                const result = await queryFulfilled;
              
                if(result?.data?.success) {
                  dispatch(updateUser(result?.data?.data));
                }
            } catch (error) { }
        },
  
      }),
    getUserInfo: builder.query({
      query: () => ({
        url: "/student/get-user-infos",
        method: "GET",
      })
    }),
    updateUserInfo: builder.mutation({
      query: (userInfo) => ({
        url: "/student/update-user-infos",
        method: "PUT",
        body: userInfo,
      })
    }),
  }),
});

export const { 
  useGetProfileDetailsQuery, 
  useProfileUpdateMutation, 
  useProfileUpdatePhotoMutation, 
  useProfileUpdatePasswordMutation,
  useGetUserInfoQuery,
  useUpdateUserInfoMutation
} = profileApi;

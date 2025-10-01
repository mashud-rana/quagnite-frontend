import {apiSlice} from "@/redux/api/apiSlice";

export const bootcampApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getBootcamp: builder.query({
      query: ({
        page = 1,
        type = 'upcoming', //upcoming, ongoing, completed
        params = {}
      }) => ({
        url: `/student/bootcamp/get-my-bootcamps?page=${page}&type=${type}&${new URLSearchParams(params).toString()}`,
        method: "GET"
      })
    }),
    getBootcampDetailsBySlug: builder.query({
      query: (slug) => ({
        url: `/student/bootcamp/${slug}/show`,
        method: "GET",
      }),
    }),
     createBootcampReview: builder.mutation({
      query: (reviewData) => ({
        url: `/student/bootcamp/submit-review`,
        method: "POST",
        body: reviewData,
      }),
    
    }),
     createBootcampDiscussion: builder.mutation({
      query: (discussionData) => ({
        url: `/student/bootcamp/submit-discussion`,
        method: "POST",
        body: discussionData,
      }),
    
    }),
    createBootcampDiscussionComment: builder.mutation({
      query: (discussionData) => ({
        url: `/student/bootcamp/submit-discussion-comment`,
        method: "POST",
        body: discussionData,
      }),
    
    }),
  })
});

export const {
  useGetBootcampQuery,
  useGetBootcampDetailsBySlugQuery,
  useCreateBootcampReviewMutation,
  useCreateBootcampDiscussionMutation,
  useCreateBootcampDiscussionCommentMutation
} = bootcampApi;

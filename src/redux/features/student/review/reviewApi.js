import { apiSlice } from "@/redux/api/apiSlice";
import { emptyAllCourses, setAllCourses } from "@/redux/features/student/course/courseSlice";


export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    reviewVote: builder.mutation({
      query: ({reviewId,type}) => ({
        url: `/student/review/${reviewId}/vote`,
        method: "POST",
        body: {  type: type },
      }),
    
    }),
    
  }),
});

export const { 
  useReviewVoteMutation
} = authApi;

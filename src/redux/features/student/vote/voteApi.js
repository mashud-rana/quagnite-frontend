import { apiSlice } from "@/redux/api/apiSlice";
import { emptyAllCourses, setAllCourses } from "@/redux/features/student/course/courseSlice";


export const voteApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    makeVote: builder.mutation({
      query: ({votable_id,votable_type, type}) => ({
        url: `/student/vote`,
        method: "POST",
        body: {  votable_id: votable_id, votable_type: votable_type, type: type },
      }),
    
    }),
    
  }),
});

export const { 
  useMakeVoteMutation
} = voteApi;

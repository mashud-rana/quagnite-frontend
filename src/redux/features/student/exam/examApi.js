import { apiSlice } from "@/redux/api/apiSlice";
import { getIn } from "yup";

export const examApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyExams: builder.query({
      query: ({ page, per_page, type }) => ({
        url: `/student/exam/get-my-exams?page=${page}&per_page=${per_page}&type=${type}`,
        method: "GET",
      }),
    }),
    startExam: builder.query({
      query: ({examUuid, enrollUuid}) => {
      
        return {
          url: `/student/exam/start/${examUuid}/${enrollUuid}`,
          method: "GET"
        };
      },
    }),
    submitExam: builder.mutation({
      query: (formData) => {
      
        return {
          url: `/student/exam/submit`,
          method: "POST",
          body: formData,
        };
      },
    }),
    
   


  }),
});

export const {
  useGetMyExamsQuery,
  useStartExamQuery,
  useSubmitExamMutation,
  
} = examApi;

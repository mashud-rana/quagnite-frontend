import { apiSlice } from "@/redux/api/apiSlice";


export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourseSubjects: builder.query({
      query: () => ({
        url: `/student/courses/get-my-courses-subjects`,
        method: "GET",
      }),
    }),
    getCourseFilters: builder.query({
      query: () => ({
        url: `/student/courses/get-filters-data`,
        method: "GET",
      }),
    }),
    getCourses: builder.query({
      query: ({ page = 1, ...params }) => ({
        url: `/student/courses/get-my-courses?page=${page}&${new URLSearchParams(params).toString()}`,
        method: "GET",
      }),
    
    }),

    
    
  }),
});

export const { useGetCourseSubjectsQuery, useGetCourseFiltersQuery, useGetCoursesQuery } = authApi;

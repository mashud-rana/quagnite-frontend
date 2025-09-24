import { apiSlice } from "@/redux/api/apiSlice";
import { emptyAllCourses, setAllCourses } from "@/redux/features/student/course/courseSlice";


export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourseSubjects: builder.query({
      query: () => ({
        url: `/student/courses/get-my-courses-subjects`,
        method: "GET",
      }),
    }),
    getCourseFilters: builder.query({
      query: ({type='all'}) => ({
        url: `/student/courses/get-filters-data?type=${type}`,
        method: "GET",
      }),
    }),
    getCourses: builder.query({
      query: ({ page = 1,  type = 'all', ...params }) => ({
        url: `/student/courses/get-my-courses?page=${page}&type=${type}&${new URLSearchParams(params).toString()}`,
        method: "GET",
      }),
      
    }),
    getCourseDetailsBySlug: builder.query({
      query: (slug) => ({
        url: `/student/courses/${slug}/show`,
        method: "GET",
      }),
    }),
    deleteCourseNote: builder.mutation({
      query: (noteId) => ({
        url: `/student/courses/delete-note/${noteId}`,
        method: "DELETE",
      }),
    
    }),
    createCourseNote: builder.mutation({
      query: (noteData) => ({
        url: `/student/courses/post-note`,
        method: "POST",
        body: noteData,
      }),
    
    }),
  }),
});

export const { 
  useGetCourseSubjectsQuery, 
  useGetCourseFiltersQuery, 
  useGetCoursesQuery, 
  useGetCourseDetailsBySlugQuery,
  useDeleteCourseNoteMutation,
  useCreateCourseNoteMutation,
} = authApi;

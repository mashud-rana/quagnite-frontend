import { apiSlice } from "@/redux/api/apiSlice";
import { updateUser } from "../../auth/authSlice";

export const courseApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        courseCategories: builder.query({
            query: () => ({
                url: "/teacher/course/categories",
                method: "GET",
            }),
            // providesTags: ['course-category']
        }),
        courseSubCategories: builder.query({
            query: ({id}) => ({
                url: `/teacher/course/categories/${id}/sub-categories`,
                method: "GET",
            }),
            // providesTags: ['course-category']
        }),
        courseBenefits: builder.query({
            query: () => ({
                url: `/teacher/benefits`,
                method: "GET",
            }),
            // providesTags: ['course-category']
        }),
        courseLanguages: builder.query({
            query: () => ({
                url: `/teacher/languages`,
                method: "GET",
            }),
            // providesTags: ['course-category']
        }),
        courseDifficulty: builder.query({
            query: () => ({
                url: `/teacher/difficulty`,
                method: "GET",
            }),
            // providesTags: ['course-category']
        }),
        courseTags: builder.query({
            query: () => ({
                url: `/teacher/tags`,
                method: "GET",
            }),
            // providesTags: ['course-category']
        }),
        courseCreate: builder.mutation({
            query: (data) => ({
                url: `/teacher/course/create`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['course']
        }),
        courseUpdate: builder.mutation({
            query: (data) => ({
                url: `/teacher/course/update`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['course']
        }),
        courseList:builder.query({
            query: ({page,limit}) => ({
                url: `/teacher/course?page=${page}&limit=${limit}`,
                method: "GET",
                }),
            providesTags: ['course']
        }),
        deleteCourse: builder.mutation({
            query: (id) => ({
                url: `/teacher/course/delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['course']
        }),
        singleCourse:builder.query({
            query: ({id:uuid}) => ({
                url: `/teacher/course/${uuid}`,
                method: "GET",
            }),
        }),
    }),
});

export const {
    useCourseCategoriesQuery,
    useCourseSubCategoriesQuery,
    useCourseBenefitsQuery,
    useCourseLanguagesQuery,
    useCourseDifficultyQuery,
    useCourseTagsQuery,
    useCourseCreateMutation,
    useCourseUpdateMutation,
    useCourseListQuery,
    useSingleCourseQuery,
    useDeleteCourseMutation,
} = courseApi;

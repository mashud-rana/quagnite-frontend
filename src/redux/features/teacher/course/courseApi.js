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


    }),
});

export const {
    useCourseCategoriesQuery,
    useCourseSubCategoriesQuery,
    useCourseBenefitsQuery,
    useCourseLanguagesQuery,
    useCourseDifficultyQuery,
    useCourseTagsQuery,
} = courseApi;

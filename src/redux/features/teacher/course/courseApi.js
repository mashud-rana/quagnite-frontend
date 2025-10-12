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
    }),
});

export const {
    useCourseCategoriesQuery,
    useCourseSubCategoriesQuery,
} = courseApi;

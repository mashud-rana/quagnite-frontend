import { apiSlice } from "@/redux/api/apiSlice";
import { updateUser } from "../../auth/authSlice";

export const bootcampApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        bootcampCategories: builder.query({
            query: () => ({
                url: "/teacher/bootcamp/categories",
                method: "GET",
            }),
            // providesTags: ['bootcamp-category']
        }),
        createBootcamp: builder.mutation({
            query: (bootcampData) => ({
                url: "/teacher/bootcamp/create",
                method: "POST",
                body: bootcampData,
            }),
        }),
    }),
});

export const {
    useBootcampCategoriesQuery,
    useCreateBootcampMutation,
} = bootcampApi;

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
        updateBootcamp: builder.mutation({
            query: ( bootcampData ) => ({
                url: `/teacher/bootcamp/update`,
                method: "POST",
                body: bootcampData,
            }),
        }),
        bootcampList:builder.query({
            query: ({page,limit}) => ({
                url: `/teacher/bootcamp?page=${page}&limit=${limit}`,
                method: "GET",
            }),
            providesTags: ['bootcamp']
        }),
        deleteBootcamp: builder.mutation({
            query: (id) => ({
                url: `/teacher/bootcamp/delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['bootcamp']
        }),
    }),
});

export const {
    useBootcampCategoriesQuery,
    useCreateBootcampMutation,
    useUpdateBootcampMutation,
    useBootcampListQuery,
    useDeleteBootcampMutation,
} = bootcampApi;

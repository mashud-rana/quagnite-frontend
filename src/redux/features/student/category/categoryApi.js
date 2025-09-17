import { apiSlice } from "@/redux/api/apiSlice";
export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getCategories: builder.query({
      query: () => ({
        url: `/student/get-courses-category`,
        method: "GET",
      }),
    }),

    
    
  }),
});

export const { useGetCategoriesQuery } = categoryApi;

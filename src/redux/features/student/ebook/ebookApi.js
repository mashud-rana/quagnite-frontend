import {apiSlice} from "@/redux/api/apiSlice";

export const bootcampApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getEbooks: builder.query({
      query: (params) => ({
        url: `/student/ebooks/get-my-ebooks?${params}`,
        method: "GET"
      })
    }),
   
  })
});

export const {
  useGetEbooksQuery,

} = bootcampApi;

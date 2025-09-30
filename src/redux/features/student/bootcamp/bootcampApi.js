import {apiSlice} from "@/redux/api/apiSlice";

export const bootcampApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getBootcamp: builder.query({
      query: ({
        page = 1,
        type = 'upcoming', //upcoming, ongoing, completed
        params = {}
      }) => ({
        url: `/student/bootcamp/get-my-bootcamps?page=${page}&type=${type}&${new URLSearchParams(params).toString()}`,
        method: "GET"
      })
    }),
    getBootcampDetailsBySlug: builder.query({
      query: (slug) => ({
        url: `/student/bootcamp/${slug}/show`,
        method: "GET",
      }),
    }),
  })
});

export const {
  useGetBootcampQuery,
  useGetBootcampDetailsBySlugQuery
} = bootcampApi;

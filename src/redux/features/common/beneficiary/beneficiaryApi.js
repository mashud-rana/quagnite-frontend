import {apiSlice} from "@/redux/api/apiSlice";

export const beneficiaryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getBeneficiaries: builder.query({
      query: () => ({
        url: `/wallet/beneficiaries`,
        method: "GET"
      })
    }),
    makeAsReadAnnouncement: builder.mutation({
      query: (announcement_id) => ({
        url: `/announcements/read`,
        method: "POST",
        body: {announcement_id},
      }),
    
    }),
    
  })
});

export const {
  useGetBeneficiariesQuery
  
} = beneficiaryApi;

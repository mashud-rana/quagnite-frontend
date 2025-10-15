import {apiSlice} from "@/redux/api/apiSlice";
import { use } from "react";

export const beneficiaryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getBeneficiaries: builder.query({
      query: () => ({
        url: `/wallet/beneficiaries`,
        method: "GET"
      })
    }),
    createBeneficiary: builder.mutation({
      query: (formData) => ({
        url: `/wallet/beneficiaries`,
        method: "POST",
        body: formData,
      }),
    
    }),
    
  })
});

export const {
  useGetBeneficiariesQuery,
  useCreateBeneficiaryMutation
} = beneficiaryApi;

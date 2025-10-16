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
    
    updateBeneficiary: builder.mutation({
      query: ({ uuid, formData }) => {
        // ✅ Append Laravel _method override
        formData.append("_method", "PUT");

        return {
          url: `/wallet/beneficiaries/${uuid}/update`,
          method: "POST",
          body: formData, // ✅ send as FormData directly
        };
      },
    }),


  
    
  })
});

export const {
  useGetBeneficiariesQuery,
  useCreateBeneficiaryMutation,
  useUpdateBeneficiaryMutation
  
} = beneficiaryApi;

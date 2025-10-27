import { apiSlice } from "@/redux/api/apiSlice";
import { getIn } from "yup";

export const certificateApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyCertificates: builder.query({
      query: ({ page, per_page, certifiable_types, search }) => ({
        url: `/student/certificates/get-my-certificates?page=${page}&per_page=${per_page}&certifiable_types=${certifiable_types}&search=${search}`,
        method: "GET",
      }),
    }),
    
    downloadMyCertificate: builder.mutation({
      query: (uuid) => ({
        url: `/student/certificates/my-certificates/download/${uuid}`,
        method: "GET",
        responseHandler: async (response) => {
          const blob = await response.blob();

          const disposition = response.headers.get("Content-Disposition");
          let fileName = "invoice.pdf";
          if (disposition && disposition.includes("filename=")) {
            fileName = disposition.split("filename=")[1].replace(/['"]/g, "").trim();
          }

          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          a.remove();
          window.URL.revokeObjectURL(url);

          return { success: true, fileName };
        },
      }),
    }),

    viewMyCertificate: builder.query({
      query: ({ uuid }) => ({
        url: `/student/certificates/my-certificates/view/${uuid}`,
        method: "GET",
        responseHandler: async (response) => {
          const blob = await response.blob();

          // Handle 0-byte or missing PDFs
          if (blob.size === 0) {
            throw new Error("Empty PDF received from server");
          }

          const fileURL = window.URL.createObjectURL(blob);
          window.open(fileURL, "_blank");

          // Revoke after some delay to free memory
          setTimeout(() => window.URL.revokeObjectURL(fileURL), 10000);

          return { success: true, url: fileURL };
        },
      }),
    }),
    getMyCertificateUrl: builder.query({
      query: ({ uuid }) => ({
        url: `/student/certificates/my-certificates/view/${uuid}`,
        method: "GET",
        responseHandler: async (response) => {
          const blob = await response.blob();

          if (blob.size === 0) throw new Error("Empty PDF received from server");

          const fileURL = window.URL.createObjectURL(blob);

          // Return blob URL (used in modal)
          return { success: true, url: fileURL };
        },
      }),
    }),

  }),
});

export const {
  useGetMyCertificatesQuery,
  useDownloadMyCertificateMutation,
  useViewMyCertificateQuery,
  useGetMyCertificateUrlQuery,
} = certificateApi;

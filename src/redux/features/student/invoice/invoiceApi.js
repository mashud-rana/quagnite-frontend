import { apiSlice } from "@/redux/api/apiSlice";
import { getIn } from "yup";

export const invoiceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInvoices: builder.query({
      query: ({page, per_page}) => ({
        url: `/student/invoices/get-my-invoices?page=${page}&per_page=${per_page}`,
        method: "GET",
      }),
    }),

    downloadInvoice: builder.mutation({
      query: (id) => ({
        url: `/student/invoices/my-invoices/download/${id}`,
        method: "GET",
        responseHandler: async (response) => {
          const blob = await response.blob();

          // Extract filename
          const disposition = response.headers.get("Content-Disposition");
          let fileName = "invoice.pdf";
          if (disposition && disposition.includes("filename=")) {
            fileName = disposition
              .split("filename=")[1]
              .replace(/['"]/g, "")
              .trim();
          }

          // Create and trigger download
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
    viewInvoice: builder.query({
      query: (uuid) => ({
        url: `/student/ebooks/my-ebooks/view/${uuid}`,
        method: "GET",
        responseHandler: async (response) => {
          const blob = await response.blob();

          // Create an object URL for the blob
          const fileURL = window.URL.createObjectURL(blob);

          // Open PDF in a new browser tab
          window.open(fileURL, "_blank");

          // Optionally revoke URL after some time (cleanup)
          setTimeout(() => window.URL.revokeObjectURL(fileURL), 10000);

          return { success: true, url: fileURL };
        },
      }),
    }),


  }),
});

export const {
  useGetInvoicesQuery,
  useDownloadInvoiceMutation,
  useViewInvoiceQuery,
} = invoiceApi;

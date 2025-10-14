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

    viewInvoice: builder.query({
      query: ({ id }) => ({
        url: `/student/invoices/my-invoices/view/${id}`,
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



  }),
});

export const {
  useGetInvoicesQuery,
  useDownloadInvoiceMutation,
  useViewInvoiceQuery,
} = invoiceApi;

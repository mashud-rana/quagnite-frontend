import { apiSlice } from "@/redux/api/apiSlice";

export const bootcampApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEbooks: builder.query({
      query: (params) => ({
        url: `/student/ebooks/get-my-ebooks?${params}`,
        method: "GET",
      }),
    }),

    downloadEbook: builder.mutation({
      query: (uuid) => ({
        url: `/student/ebooks/my-ebooks/download/${uuid}`,
        method: "GET",
        responseHandler: async (response) => {
          const blob = await response.blob();

          // Get filename from Content-Disposition header
          const disposition = response.headers.get("Content-Disposition");
          let fileName = "download.pdf"; // fallback name
          if (disposition && disposition.includes("filename=")) {
            fileName = disposition
              .split("filename=")[1]
              .replace(/['"]/g, "")
              .trim();
          }

          // Auto download
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
  }),
});

export const {
  useGetEbooksQuery,
  useDownloadEbookMutation, // ✅ use mutation instead of query
} = bootcampApi;

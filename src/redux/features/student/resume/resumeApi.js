import { apiSlice } from "@/redux/api/apiSlice";
import { getIn } from "yup";

export const resumeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyResumes: builder.query({
      query: ({ page, per_page }) => ({
        url: `/student/resumes/get-my-resumes?page=${page}&per_page=${per_page}`,
        method: "GET",
      }),
    }),
    
    downloadResume: builder.mutation({
      query: (uuid) => ({
        url: `/student/resumes/my-resumes/download/${uuid}`,
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

    deleteResume: builder.mutation({
      query: ({ uuid }) => {
      
        return {
          url: `/student/resumes/my-resumes/${uuid}/delete`,
          method: "DELETE",
        };
      },
    }),
    uploadResume: builder.mutation({
      query: (formData) => {
      
        return {
          url: `/student/resumes/resume-upload`,
          method: "POST",
          body: formData,
        };
      },
    }),



  }),
});

export const {
  useGetMyResumesQuery,
  useDownloadResumeMutation,
  useDeleteResumeMutation,
  useUploadResumeMutation
} = resumeApi;

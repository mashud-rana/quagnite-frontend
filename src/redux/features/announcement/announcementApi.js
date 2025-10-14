import {apiSlice} from "@/redux/api/apiSlice";

export const announcementApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAnnouncement: builder.query({
      query: ({page,per_page}) => ({
        url: `/announcements/get-all?page=${page}&per_page=${per_page}`,
        method: "GET"
      })
    }),
    
  })
});

export const {
  useGetAnnouncementQuery,
  
} = announcementApi;

import {apiSlice} from "@/redux/api/apiSlice";

export const announcementApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAnnouncement: builder.query({
      query: ({page,per_page}) => ({
        url: `/announcements/get-all?page=${page}&per_page=${per_page}`,
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
    getTodayAnnouncement: builder.query({
      query: ({page,per_page}) => ({
        url: `/announcements/get-today?page=${page}&per_page=${per_page}`,
        method: "GET"
      })
    }),
    
  })
});

export const {
  useGetAnnouncementQuery,
  useMakeAsReadAnnouncementMutation,
  useGetTodayAnnouncementQuery
  
} = announcementApi;

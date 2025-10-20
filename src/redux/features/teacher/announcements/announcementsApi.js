import { apiSlice } from "@/redux/api/apiSlice";
import { updateUser } from "../../auth/authSlice";

export const announcementsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        announcements: builder.query({
            query: (data) => ({
                url: "/teacher/announcements",
                method: "GET",
            }),
            // providesTags: ['announcements']
        }),
    }),
});

export const {
    useAnnouncementsQuery,
} = announcementsApi;

import { apiSlice } from "@/redux/api/apiSlice";
export const difficultyLevel = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getDifficultyLevels: builder.query({
      query: () => ({
        url: `/student/get-difficulty-level`,
        method: "GET",
      }),
    }),

    
    
  }),
});

export const { useGetDifficultyLevelsQuery } = difficultyLevel;

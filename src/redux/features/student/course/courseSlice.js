import { createSlice } from "@reduxjs/toolkit";
import { set } from "nprogress";

const initialState = {
  page: 1,
  filters: {
    category_ids: '',
    difficulty_level_ids: '',
    search: '',
  },

};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = state.page + action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  
  },
});

export const { setPage, setFilters } = courseSlice.actions;
export default courseSlice.reducer;

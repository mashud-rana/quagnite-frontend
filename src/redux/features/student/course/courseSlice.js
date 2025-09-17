import { createSlice } from "@reduxjs/toolkit";
import { em } from "framer-motion/client";


const initialState = {
  page: 1,
  filters: {
    category_ids: '',
    difficulty_level_ids: '',
    course_subjects_ids: '',
    search: '',
  },
  allCourses:[]

};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page =  action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setAllCourses: (state, action) => {
      state.allCourses = [...state.allCourses, ...action.payload];
    },
    emptyAllCourses: (state) => {
      state.allCourses = [];
    }
  
  },
});

export const { setPage, setFilters, setAllCourses, emptyAllCourses } = courseSlice.actions;
export default courseSlice.reducer;

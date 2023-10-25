import { createSlice } from "@reduxjs/toolkit";
import {
  addTeacher,
  editTeacher,
  fetchTeachers,
} from "../services/teacherServices";

const initialState = {
  teachers: [],
};
const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeachers.fulfilled, (state, action) => {
      state.teachers = action.payload;
    });
    builder.addCase(addTeacher.fulfilled, (state, action) => {
      state.teachers = [...state.teachers, action.payload];
    });
    builder.addCase(editTeacher.fulfilled, (state, action) => {
      return state;
    });
  },
});

export default teacherSlice.reducer;

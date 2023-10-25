import { createSlice } from "@reduxjs/toolkit";
import { addStudent, editStudent, fetchStudents } from "../services/studentServices";
const initialState = {
  students: [],
};


const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.students = action.payload;
    });
    builder.addCase(addStudent.fulfilled, (state, action) => {
      state.students = [...state.students, action.payload];
    });
    builder.addCase(editStudent.fulfilled, (state,action)=>{
      return state
    })
  },
});

export default studentSlice.reducer;

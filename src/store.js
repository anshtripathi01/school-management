import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./slices/studentSlice";
import teacherReducer from "./slices/teacherSlice";
const store = configureStore({
  reducer: {
    students: studentReducer,
    teachers: teacherReducer,
  },
});

export default store;

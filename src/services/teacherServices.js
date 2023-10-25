import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchStudents",
  async () => {
    try {
      const response = await fetch(
        "https://anshtripathi-assignment-20.ansh-tripathi.repl.co/api/v1/teachers"
      );
      const { teachers } = await response.json();
      return teachers;
    } catch (error) {
      console.log("error while fetching teachers");
    }
  }
);
export const addTeacher = createAsyncThunk(
  "teachers/addTeacher",
  async (teacherData) => {
    try {
      const response = await fetch(
        "https://anshtripathi-assignment-20.ansh-tripathi.repl.co/api/v1/teachers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(teacherData),
        }
      );
      const teacher = await response.json();
      toast.success("Teacher Added Successfully", { autoClose: 1000 });
      return teacher;
    } catch (error) {
      console.log("error while adding");
    }
  }
);

export const editTeacher = createAsyncThunk(
  "teachers/editStudent",
  async (data) => {
    const { teacher, id } = data;
    try {
      const response = await fetch(
        `https://anshtripathi-assignment-20.ansh-tripathi.repl.co/api/v1/teachers/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(teacher),
        }
      );
      const updatedTeacher = await response.json();
      toast.success("Teacher details updated", { autoClose: 1000 });
      return updatedTeacher;
    } catch (error) {
      console.log("error while editing");
    }
  }
);

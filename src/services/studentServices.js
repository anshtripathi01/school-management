import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudents = createAsyncThunk(
    "students/fetchStudents",
    async () => {
      try {
          const response = await fetch(
              "https://anshtripathi-assignment-20.ansh-tripathi.repl.co/api/v1/students"
            );
            const { students } = await response.json();
            return students; 
      } catch (error) {
          console.log("error while fetching students");
      }
      
    }
  );
  export const addStudent = createAsyncThunk(
    "students/addStudent",
    async (studentData) => {
      try {
        const response = await fetch(
          "https://anshtripathi-assignment-20.ansh-tripathi.repl.co/api/v1/students",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(studentData),
          }
        );
        const student = await response.json();
        alert("Student Added Successfully")
        return student;
      } catch (error) {
        console.log("error while adding");
      }
    }
  );
  
  export const editStudent = createAsyncThunk(
    "students/editStudent",
    async (data) => {
        const {student, id} = data
      try {
        const response = await fetch(
          `https://anshtripathi-assignment-20.ansh-tripathi.repl.co/api/v1/students/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(student),
          }
        );
        const updatedStudent = await response.json();
        alert("Student details updated")
        return updatedStudent
        
      } catch (error) {
        console.log("error while adding");
      }
    }
  );
  
  
import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import { SchoolStatistics } from "./pages/SchoolStatistics";
import { Header } from "./components/Header";
import { Students } from "./pages/student/Students";
import { Teachers } from "./pages/teacher/Teachers";
import ClassView from "./pages/ClassView";
import { StudentDetails } from "./pages/student/StudentDetails";
import { TeacherDetails } from "./pages/teacher/TeacherDetails";
import { StudentForm } from "./pages/student/StudentForm";
import { TeacherForm } from "./pages/teacher/TeacherForm";

function App() {
  return (
    <Flex flexDirection="column">
      <Header />
      <Routes>
        <Route path="/" element={<SchoolStatistics />} />
        <Route path="/students" element={<Students />} />
        <Route path="/student/add" element={<StudentForm />} />
        <Route path="/student/edit" element={<StudentForm />} />
        <Route path="/students/:studentId" element={<StudentDetails />} />  
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teacher/add" element={<TeacherForm />} />
        <Route path="/teacher/edit" element={<TeacherForm />} />
        <Route path="/teachers/:teacherId" element={<TeacherDetails />} />
        <Route path="/class" element={<ClassView />} />
      </Routes>
    </Flex>
  );
}

export default App;

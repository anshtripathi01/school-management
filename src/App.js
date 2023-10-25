import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import { SchoolStatistics } from "./pages/SchoolStatistics";
import { Header } from "./components/Header";
import { Students } from "./pages/Students";
import { Teachers } from "./pages/Teachers";
import ClassView from "./pages/ClassView";
import { StudentDetails } from "./pages/StudentDetails";
import { TeacherDetails } from "./pages/TeacherDetails";
import { StudentForm } from "./pages/StudentForm";

function App() {
  return (
    <Flex flexDirection="column">
      <Header />
      <Routes>
        <Route path="/" element={<SchoolStatistics />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:studentId" element={<StudentDetails />} />
        <Route path="/student/add" element={<StudentForm />} />
        <Route path="/student/edit" element={<StudentForm />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/:teacherId" element={<TeacherDetails />} />
        <Route path="/class" element={<ClassView />} />
      </Routes>
    </Flex>
  );
}

export default App;

import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import { SchoolStatistics } from "./pages/SchoolStatistics";
import { Header } from "./components/Header";
import { Students } from "./pages/Students";
import { Teachers } from "./pages/Teachers";
import ClassView from "./pages/ClassView";

function App() {
  return (
    <Flex flexDirection="column">
      <Header />
      <Routes>
        <Route path="/" element={<SchoolStatistics />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/class" element={<ClassView />} />
      </Routes>
    </Flex>
  );
}

export default App;

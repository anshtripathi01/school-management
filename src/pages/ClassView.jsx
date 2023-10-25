import React, { useState } from 'react';
import {
  Box,
  Select,
  RadioGroup,
  Radio,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { filterStudents } from '../utils/filterStudents';

export const ClassView = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedGender, setSelectedGender] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Name');
  const students = useSelector(state=>state.students.students)

  const filteredAndSortedStudents = filterStudents(students, selectedClass, selectedGender, selectedSort);
 
  return (
    <Box p={4}>
    <Heading size="md">Class View</Heading>
    <Flex flexWrap="wrap" justifyContent="space-evenly" alignItems="center" m="1rem">
      <Select
        placeholder="Select Class"
        value={selectedClass}
        onChange={e => setSelectedClass(e.target.value)}
        w="10rem"
      >
        <option value="">All Classes</option>
        {Array.from({ length: 12 }, (_, i) => (i + 1).toString()).map(classNum => (
          <option key={classNum} value={classNum}>
            Class {classNum}
          </option>
        ))}
      </Select>
      <RadioGroup value={selectedGender} onChange={setSelectedGender}>
        <Stack direction="row">
          <Radio value="All">All Genders</Radio>
          <Radio value="Male">Male</Radio>
          <Radio value="Female">Female</Radio>
        </Stack>
      </RadioGroup>
      <Select
        value={selectedSort}
        onChange={e => setSelectedSort(e.target.value)}
        w="10rem"
      >
        <option value="Name">Sort by Name</option>
        <option value="Age">Sort by Age</option>
        <option value="Attendance">Sort by Attendance</option>
        <option value="Marks">Sort by Marks</option>
      </Select>
      </Flex>
    {!filteredAndSortedStudents?.length?<Heading size="md" textAlign="center">No student found</Heading>:
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Class</Th>
            <Th>Gender</Th>
            <Th>Age</Th>
            <Th>Attendance</Th>
            <Th>Marks</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredAndSortedStudents?.map(student => (
            <Tr key={student._id}>
              <Td>{student.name}</Td>
              <Td>{student.grade}</Td>
              <Td>{student.gender}</Td>
              <Td>{student.age}</Td>
              <Td>{student.attendance}</Td>
              <Td>{student.marks}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    }
    </Box>
  );
}

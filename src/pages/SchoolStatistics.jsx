import React from 'react';
import { Box, Text, Stat, StatLabel, StatNumber, StatHelpText, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { calculateSchoolStatistics } from '../utils/calculateSchoolStatistics';


export const SchoolWideStatisticsCard = () => {
  const students = useSelector(state => state.students.students)
  const schoolStatistics = calculateSchoolStatistics(students);

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
    <Box
    borderWidth="1px"
    borderRadius="lg"
    boxShadow="md"
    m="1rem"
    p="2rem"

  >
    <Text fontSize="xl" fontWeight="bold" mb={2}>
      School-wide Statistics
    </Text>
    <Stat>
      <StatLabel>Total Students</StatLabel>
      <StatNumber>{schoolStatistics.totalStudents}</StatNumber>
      <StatHelpText>As of today</StatHelpText>
    </Stat>
    <Stat>
      <StatLabel>Average Attendance</StatLabel>
      <StatNumber>{schoolStatistics.averageAttendance}%</StatNumber>
      <StatHelpText>Overall</StatHelpText>
    </Stat>
    <Stat>
      <StatLabel>Average Marks</StatLabel>
      <StatNumber>{schoolStatistics.averageMarks}</StatNumber>
      <StatHelpText>Overall</StatHelpText>
    </Stat>
    <Stat>
      <StatLabel>Top Performer</StatLabel>
      <StatNumber>{schoolStatistics.topPerformer.name}</StatNumber>
      <StatHelpText>Marks: {schoolStatistics.topPerformer.marks}</StatHelpText>
    </Stat>
  </Box>
  </Flex>
);
}


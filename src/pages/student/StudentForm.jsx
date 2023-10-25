import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { addStudent, editStudent } from "../../services/studentServices";
import { useDispatch } from "react-redux";

export const StudentForm = () => {
  const {
    _id: id,
    name,
    age,
    gender,
    grade,
    marks,
    attendance,
  } = useLocation()?.state ?? "";
  const navigate = useNavigate();
  const location = useLocation()?.pathname;
  const dispatch = useDispatch();
  const [student, setStudent] = useState({
    name,
    age,
    gender,
    grade,
    marks,
    attendance,
  });
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editStudent({ student, id }));
    navigate("/students");
  };

  const handleAddStudent = (studentData) => {
    dispatch(addStudent(studentData));
    navigate("/students");
  };
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Heading size="md" m="1rem">
        {location === "/student/edit" ? "Update Student Details" : "Fill Student Details"}
      </Heading>
      <Flex
        w="20rem"
        h="30rem"
        as="form"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        onSubmit={(e) => handleUpdate(e)}
      >
        <Input
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
          type="text"
          placeholder="Enter Student name"
          defaultValue={name}
        />
        <Input
          onChange={(e) => setStudent({ ...student, age: e.target.value })}
          type="number"
          placeholder="age"
          defaultValue={age}
        />
        <Input
          onChange={(e) => setStudent({ ...student, gender: e.target.value })}
          type="text"
          placeholder="gender"
          defaultValue={gender}
        />
        <Input
          onChange={(e) => setStudent({ ...student, grade: e.target.value })}
          type="number"
          placeholder="grade"
          defaultValue={grade}
        />
        <Input
          onChange={(e) => setStudent({ ...student, marks: e.target.value })}
          type="number"
          placeholder="marks"
          defaultValue={marks}
        />
        <Input
          onChange={(e) =>
            setStudent({ ...student, attendance: e.target.value })
          }
          type="number"
          placeholder="attendance"
          defaultValue={attendance}
        />
        {location === "/student/edit" ? (
          <Button type="submit" m="1rem" colorScheme="teal" color="white">
            Update
          </Button>
        ) : (
          <Button
            onClick={() => handleAddStudent(student)}
            bgColor="teal.300"
            px="2rem"
            py="1rem"
            m="1rem"
          >
            Add
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const StudentDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const { studentId } = useParams();
  const { _id, name, age, gender, grade, marks, attendance } = students.find(
    ({ _id }) => _id === studentId
  );

  const deleteStudent = createAsyncThunk(
    "students/deleteStudent",
    async (id) => {
      const response = await fetch(
        `https://anshtripathi-assignment-20.ansh-tripathi.repl.co/api/v1/students/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { message } = await response.json();
      toast.warning(message, { autoClose: 1000 });
      navigate("/students");
    }
  );
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Heading size="md" m="1rem">
        Student Details
      </Heading>
      <Card w="20rem">
        <CardBody textAlign="center">
          <Heading size="md" m={1}>
            {name}
          </Heading>
          <Heading size="xs">Age : {age}</Heading>
          <Heading size="xs">Gender : {gender}</Heading>
          <Heading size="xs">Grade : {grade}th</Heading>
          <Heading size="xs">Marks : {marks}</Heading>
          <Heading size="xs">Attendance : {attendance}%</Heading>
          <ButtonGroup m="1rem" spacing={5}>
            <Button
              colorScheme="teal"
              color="white"
              onClick={() => {
                navigate("/student/edit", {
                  state: { _id, name, age, gender, grade, marks, attendance },
                });
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                dispatch(deleteStudent(_id));
              }}
              colorScheme="red"
              color="white"
            >
              Delete
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    </Flex>
  );
};

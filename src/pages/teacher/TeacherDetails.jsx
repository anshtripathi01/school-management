import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

export const TeacherDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers.teachers);
  const { teacherId } = useParams();
  const { _id, name, subject, contactInfo } = teachers.find(
    ({ _id }) => _id === teacherId
  );

  const deleteTeacher = createAsyncThunk(
    "teachers/deleteTeacher",
    async (id) => {
      const response = await fetch(
        `https://anshtripathi-assignment-20.ansh-tripathi.repl.co/api/v1/teachers/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { message } = await response.json();
      toast.warning(message, { autoClose: 1000 });
      navigate("/teachers");
    }
  );
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Heading size="md" m="1rem">
        Teacher Details
      </Heading>

      <Card w="20rem">
        <CardBody textAlign="center">
          <Heading size="md" m={1}>
            {name}
          </Heading>
          <Heading size="xs">Subject : {subject}</Heading>
          <Heading size="xs">Contact : {contactInfo}</Heading>
          <ButtonGroup m="1rem" spacing={5}>
            <Button
              colorScheme="teal"
              color="white"
              onClick={() => {
                navigate("/teacher/edit", {
                  state: { _id, name, subject, contactInfo },
                });
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                dispatch(deleteTeacher(_id));
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

import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addTeacher, editTeacher } from "../../services/teacherServices";

export const TeacherForm = () => {
  const { _id: id, name, subject, contactInfo } = useLocation()?.state ?? "";
  const navigate = useNavigate();
  const location = useLocation()?.pathname;
  const dispatch = useDispatch();
  const [teacher, setTeacher] = useState({
    name,
    subject,
    contactInfo,
  });
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editTeacher({ teacher, id }));
    navigate("/teachers");
  };

  const handleAddTeacher = (e, teacherData) => {
    e.preventDefault();
    dispatch(addTeacher(teacherData));
    navigate("/teachers");
  };
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Heading size="md" m="1rem">
        {location === "/teacher/edit"
          ? "Update Teacher Details"
          : "Fill Teacher Details"}
      </Heading>
      <Flex
        w="20rem"
        h="20rem"
        as="form"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        onSubmit={(e) => {
          location === "/teacher/edit"
            ? handleUpdate(e)
            : handleAddTeacher(e, teacher);
        }}
      >
        <Input
          onChange={(e) => setTeacher({ ...teacher, name: e.target.value })}
          type="text"
          placeholder="Enter Teacher name"
          defaultValue={name}
          required
        />
        <Input
          onChange={(e) => setTeacher({ ...teacher, subject: e.target.value })}
          type="text"
          placeholder="Enter Subject"
          defaultValue={subject}
          required
        />
        <Input
          onChange={(e) =>
            setTeacher({ ...teacher, contactInfo: e.target.value })
          }
          type="number"
          placeholder="Enter Contact Number"
          defaultValue={contactInfo}
          required
        />

        <Button type="submit" m="1rem" colorScheme="teal" color="white">
          {location === "/teacher/edit" ? "Update" : " Add"}
        </Button>
      </Flex>
    </Flex>
  );
};

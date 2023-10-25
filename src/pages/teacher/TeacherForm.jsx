import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addTeacher, editTeacher } from "../../services/teacherServices";

export const TeacherForm = () => {
  const { _id: id, name, subject , contactInfo} = useLocation()?.state ?? "";
  const navigate = useNavigate();
  const location = useLocation()?.pathname;
  const dispatch = useDispatch();
  const [teacher, setTeacher] = useState({
    name,
    subject,
    contactInfo
  });
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editTeacher({ teacher, id }));
    navigate("/teachers");
  };

  const handleAddTeacher = (teacherData) => {
    dispatch(addTeacher(teacherData));
    navigate("/teachers");
  };
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Heading size="md" m="1rem">
        {location === "/teacher/edit" ? "Edit Teacher" : "Add New Teacher"}
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
          onChange={(e) => setTeacher({ ...teacher, name: e.target.value })}
          type="text"
          placeholder="Enter Teacher name"
          defaultValue={name}
        />
        <Input
          onChange={(e) => setTeacher({ ...teacher, subject: e.target.value })}
          type="text"
          placeholder="Enter Subject"
          defaultValue={subject}
        />
        <Input
          onChange={(e) =>
            setTeacher({ ...teacher, contactInfo: e.target.value })
          }
          type="number"
          placeholder="Enter Contact Number"
          defaultValue={contactInfo}
        />
        {location === "/teacher/edit" ? (
          <Button type="submit" m="1rem" colorScheme="teal" color="white">
            Update
          </Button>
        ) : (
          <Button
            onClick={() => handleAddTeacher(teacher)}
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

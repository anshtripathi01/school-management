import { Button, Card, Flex, Heading, Link } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchTeachers } from "../../services/teacherServices";
import { NavLink } from "react-router-dom";

export const Teachers = () => {
  const teachers = useSelector((state) => state.teachers.teachers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch, teachers]);

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Button
        onClick={() => navigate("/teacher/add")}
        bgColor="teal.300"
        px="2rem"
        py="1rem"
        m="1rem"
      >
        Add New Teacher
      </Button>
      {!teachers.length && (
        <Heading size="sm" m="1rem">
          No teachers found
        </Heading>
      )}
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        {teachers.map(({ _id, name, subject }) => (
          <Card key={_id} m="1rem" p="1rem">
            <Link
              to={`/teachers/${_id}`}
              as={NavLink}
              textDecoration="underline"
            >
              {`${name} - ${subject}`}
            </Link>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};

import { Flex, Button, Card, Link } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

export const Students = () => {
  const students = useSelector((state) => state.students.students);
  const navigate = useNavigate();
 
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Button
        onClick={() => navigate("/student/add")}
        bgColor="teal.300"
        px="2rem"
        py="1rem"
        m="1rem"
      >
        Add New Student
      </Button>

      <Flex flexWrap="wrap" justifyContent="space-evenly">
        {students.map(({ _id, name, gender, grade }) => (
          <Card key={_id} m="1rem" p="1rem">
            <Link
              to={`/students/${_id}`}
              as={NavLink}
              textDecoration="underline"
            >
              {`${name} - ${gender} - ${grade}th`}
            </Link>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};

import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Flex w="100%" boxShadow="md" flexWrap="wrap" justifyContent="space-between" bgColor="teal.300" p="2">
      <Link to="/">
        <Heading fontSize="md">iSchool Management</Heading>
      </Link>
      <Flex flexGrow="1" justifyContent="space-evenly">
        <NavLink to="/">School statistics</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
        <NavLink to="/class">Class View</NavLink>
      </Flex>
    </Flex>
  );
};

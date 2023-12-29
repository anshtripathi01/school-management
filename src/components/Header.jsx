import { Flex, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const activeLink = ({ isActive }) => ({
    borderBottom: isActive ? "3px teal solid" : "",
  });
  return (
    <Flex
      w="100%"
      boxShadow="md"
      flexWrap="wrap"
      justifyContent="space-between"
      bgColor="teal.300"
      p="3"
    >
      <Link to="/">
        <Heading fontSize="md">School Management</Heading>
      </Link>
      <Flex flexGrow="1" justifyContent="space-evenly">
        <NavLink style={activeLink} to="/">
          School View
        </NavLink>
        <NavLink style={activeLink} to="/students">
          Students
        </NavLink>
        <NavLink style={activeLink} to="/teachers">
          Teachers
        </NavLink>
        <NavLink style={activeLink} to="/class">
          Class View
        </NavLink>
        <NavLink style={activeLink} to="https://github.com/anshtripathi01/school-management">
              <Button variant="solid" colorScheme='teal'>Github</Button>
        </NavLink>
      </Flex>
    </Flex>
  );
};

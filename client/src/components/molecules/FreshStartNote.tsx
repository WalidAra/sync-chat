import { Button, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FreshStartNote = () => {
  return (
    <Flex flexDir={"column"} gap={2} alignItems={"center"}>
      <Heading textAlign={"center"}>Welcome to Chat App</Heading>
      <p>Please login or register to start chatting</p>
      <Link to={"/find-friends"}>
        <Button>Start new conversation</Button>
      </Link>
    </Flex>
  );
};

export default FreshStartNote;

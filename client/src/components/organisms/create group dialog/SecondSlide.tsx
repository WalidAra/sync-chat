/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useGroupChat } from "../../../providers/CreateGroupChatProvider";

const SecondSlide = () => {
  const { descriptionRef , nameRef } = useGroupChat();

  return (
    <Flex px={6} flexDir={"column"} flexShrink={0} w={"100%"} h={"100%"}>
      <FormControl>
        <FormLabel>Group name</FormLabel>
        <Input type="text" ref={nameRef} />
        <FormLabel>Group description</FormLabel>
        <Textarea ref={descriptionRef} />
      </FormControl>
    </Flex>
  );
};

export default SecondSlide;

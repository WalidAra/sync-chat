import { Flex } from "@chakra-ui/react";
import FreshStartNote from "../../components/molecules/FreshStartNote";
import ChatPanel from "../../components/templates/ChatPanel";

const FreshStart = () => {
  return (
    <Flex w={"100%"} h={"100vh"} ml={"14"}>
      <ChatPanel />

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        flexDir={"column"}
      >
        <FreshStartNote />
      </Flex>
    </Flex>
  );
};

export default FreshStart;

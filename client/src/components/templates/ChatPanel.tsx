import { Box } from "@chakra-ui/react";

const ChatPanel = () => {
  return (
    <Box
      w={"380px"}
      h={"100vh"}
      display={"flex"}
      flexDir={"column"}
      borderRightWidth="1px"
      flexShrink={0}
    ></Box>
  );
};

export default ChatPanel;

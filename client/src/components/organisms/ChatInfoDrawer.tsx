import { Box } from "@chakra-ui/react";
import { useChatDrawer } from "../../hooks";

const ChatInfoDrawer = () => {
  const { isOpen } = useChatDrawer();

  return (
    <Box
      w={isOpen ? "320px" : "0px"}
      transitionDuration={"0.2s "}
      flexShrink={0}
      h={"100vh"}
      borderLeftWidth={"1px"}
    >
      
    </Box>
  );
};

export default ChatInfoDrawer;

import { Box } from "@chakra-ui/react";
import OnlineNPCS from "../molecules/OnlineNPCS";
import ChatsContainer from "../organisms/ChatsContainer";

const ChatPanel = () => {
  return (
    <Box
      w={"320px"}
      h={"100vh"}
      display={"flex"}
      flexDir={"column"}
      borderRightWidth="1px"
      flexShrink={0}
      py={2}
      px={3}
      gap={2}
      overflow={"auto"}
    >
      <OnlineNPCS />
      <ChatsContainer />
    </Box>
  );
};

export default ChatPanel;

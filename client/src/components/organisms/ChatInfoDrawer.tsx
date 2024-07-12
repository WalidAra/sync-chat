import { Avatar, Badge, Box, Button, Flex, Text } from "@chakra-ui/react";
import { useChatDrawer } from "../../hooks";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import CloseDrawerBtn from "../atoms/CloseDrawerBtn";
import { LuTrash2 } from "react-icons/lu";

type Props = {
  isGroup: boolean;
};

const ChatInfoDrawer = ({ isGroup }: Props) => {
  const { isOpen } = useChatDrawer();

  return (
    <Box
      w={"320px"}
      transitionDuration={"0.2s "}
      flexShrink={0}
      h={"100vh"}


      position={"absolute"}
      right={isOpen ? "0" : "-320px"}
      top={0}
      zIndex={'10'}
      bg={'background.100'}

    >
      

      

      
    </Box>
  );
};

export default ChatInfoDrawer;

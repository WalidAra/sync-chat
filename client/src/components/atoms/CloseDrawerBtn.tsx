import { IconButton } from "@chakra-ui/react";
import { useChatDrawer } from "../../hooks";
import { LuX } from "react-icons/lu";

const CloseDrawerBtn = () => {
  const { onClose } = useChatDrawer();

  return (
    <IconButton
      onClick={onClose}
      isRound={true}
      variant="ghost"
      colorScheme="blackAlpha"
      aria-label="Done"
      fontSize="20px"
      icon={<LuX style={{ fontSize: "24px" }} />}
    />
  );
};

export default CloseDrawerBtn;

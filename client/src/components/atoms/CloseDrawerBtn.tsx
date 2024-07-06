import { IconButton } from "@chakra-ui/react";
import { RiLayout4Fill } from "react-icons/ri";
import { useChatDrawer } from "../../hooks";

const CloseDrawerBtn = () => {
  const { onToggle } = useChatDrawer();

  return (
    <IconButton
      onClick={onToggle}
      isRound={true}
      variant="ghost"
      colorScheme="blackAlpha"
      aria-label="Done"
      fontSize="20px"
      color={"primary.100"}
      icon={<RiLayout4Fill style={{ fontSize: "24px" }} />}
    />
  );
};

export default CloseDrawerBtn;

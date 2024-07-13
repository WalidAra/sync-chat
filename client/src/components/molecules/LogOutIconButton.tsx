import { IconButton } from "@chakra-ui/react";
import { IoLogOut } from "react-icons/io5";

const LogOutIconButton = () => {
  return (
    <IconButton
      onClick={() => {
        localStorage.removeItem("sync-token");
        window.location.reload();
      }}
      isRound={true}
      variant="ghost"
      colorScheme="blackAlpha"
      aria-label="Done"
      color={"red"}
      fontSize="20px"
      icon={<IoLogOut />}
    />
  );
};

export default LogOutIconButton;

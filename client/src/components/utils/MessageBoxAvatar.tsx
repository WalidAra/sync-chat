import { Avatar } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../features/state_management/store/store";

const MessageBoxAvatar = () => {
  const data = useSelector((state: RootState) => state.user).user;
  return <Avatar name={data.name} src={data.image || undefined} size={"sm"} />;
};

export default MessageBoxAvatar;

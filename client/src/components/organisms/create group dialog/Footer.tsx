/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AlertDialogFooter,
  Avatar,
  AvatarGroup,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useGroupChat } from "../../../providers/CreateGroupChatProvider";
import { useAuth } from "../../../hooks/useAuth";
import { useFetch } from "../../../hooks/useFetch";
import socket from "../../../utils/socket";

type Props = {
  setSlide: (slide: number) => void;
  slide: number;
  onClose: () => void;
};

const Footer = ({ setSlide, slide, onClose }: Props) => {
  const { token } = useAuth();

  const { selectedUsers, setSelectedUsers, descriptionRef, nameRef } =
    useGroupChat();

  const createGroupChat = async () => {
    const name = nameRef.current?.value;
    const description = descriptionRef.current?.value;
    const members = selectedUsers.map((u) => u.User.id);

    socket.emit("create-group-chat", { name, members, token, description });
    onClose();
  };

  return (
    <AlertDialogFooter
      display={"flex"}
      alignItems={"center"}
      justifyContent={slide === 0 ? "space-between" : "flex-end"}
      borderTopWidth={"1px"}
    >
      {slide === 0 ? (
        <>
          <AvatarGroup size="sm" max={4}>
            {selectedUsers.map((u) => (
              <Avatar name={u.User.name} src={u.User.image || ""} />
            ))}
          </AvatarGroup>
          <Button
            colorScheme="cyan"
            bg={"primary.100"}
            color={"white"}
            onClick={() => setSlide(1)}
            ml={3}
          >
            Continue
          </Button>
        </>
      ) : (
        <Flex alignItems={"center"} gap={4}>
          <Button
            onClick={() => {
              setSlide(0);
              setSelectedUsers([]);
              onClose();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={createGroupChat}
            colorScheme="cyan"
            bg={"primary.100"}
            color={"white"}
          >
            Create
          </Button>
        </Flex>
      )}
    </AlertDialogFooter>
  );
};

export default Footer;

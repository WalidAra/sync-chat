/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Flex,
  Input,
  IconButton,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { LuLink, LuMic } from "react-icons/lu";
import MessageBoxAvatar from "../utils/MessageBoxAvatar";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import socket from "../../utils/socket";

type Props = {
  chatId: string;
};

const MessageInputBox = ({ chatId }: Props) => {
  const [msg, setMsg] = useState<string>("");
  const [type] = useState<"SIMPLE" | "COMPLEX">("SIMPLE");
  const [attachments] = useState<string[]>([]);
  const { token } = useAuth();

  const sendMessage = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (token && msg) {
      socket.emit("message", {
        content: msg,
        token,
        chatId,
        type,
        attachments,
      });
    }

    setMsg("");
  };

  return (
    <Box
      w={"100%"}
      borderTopWidth={"1px"}
      p={4}
      position={"relative"}
      bg={"transparent"}
    >
      <FormControl
        as="form"
        onSubmit={(e) => sendMessage(e)}
        gap={2}
        flexDir={"column"}
        w={"100%"}
        bg={"background.100"}
        p={4}
        rounded={"lg"}
        shadow={"box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"}
        borderWidth={"1px"}
      >
        <Flex alignItems={"center"} gap={0}>
          <MessageBoxAvatar />
          <Input
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
            size={"sm"}
            type="text"
            placeholder="Type your message..."
            sx={{
              border: "none",
              outline: "none",
              boxShadow: "none",
              _hover: {
                border: "none",
                outline: "none",
                boxShadow: "none",
              },
              _focus: {
                border: "none",
                outline: "none",
                boxShadow: "none",
              },
              _active: {
                border: "none",
                outline: "none",
                boxShadow: "none",
              },
            }}
          />
        </Flex>

        <Flex gap={3} alignItems={"center"} justifyContent={"flex-end"}>
          <Flex gap={1} alignItems={"center"}>
            <IconButton
              isRound={true}
              variant="ghost"
              colorScheme="blackAlpha"
              aria-label="Done"
              fontSize="20px"
              icon={<LuLink />}
              size={"sm"}
            />
            <IconButton
              isRound={true}
              variant="ghost"
              colorScheme="blackAlpha"
              aria-label="Done"
              fontSize="20px"
              icon={<LuMic />}
              size={"sm"}
            />
            <IconButton
              isRound={true}
              variant="ghost"
              colorScheme="blackAlpha"
              aria-label="Done"
              fontSize="20px"
              icon={<HiOutlineEmojiHappy />}
              size={"sm"}
            />
          </Flex>

          <Button
            type="submit"
            size={"sm"}
            bg={"primary.100"}
            color={"white"}
            fontWeight={600}
            colorScheme="cyan"
            isDisabled={msg === ""}
          >
            Send
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default MessageInputBox;

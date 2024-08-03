/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { LuHash, LuSearch } from "react-icons/lu";
import MessageBox from "../molecules/MessageBox";
import CreateGroupDialog from "./CreateGroupDialog";
import MessageSection from "../molecules/MessageSection";
import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useFetch } from "../../hooks/useFetch";
import { Chat, Member, Message } from "../../types";
import socket from "../../utils/socket";

const getChats = async (token: string) => {
  const res = await useFetch({
    feature: "/user",
    method: "GET",
    endPoint: "/chats",
    token,
  });

  if (res.status === true) {
    const data = res.data as ChatsResponseProps[];
    console.log(data);

    return data;
  } else {
    console.log("error");
  }
};

type ChatsResponseProps = Chat & {
  Message: Message[];
  Member: Member[];
};

const ChatsContainer = () => {
  //   const [searchValue, setSearchValue] = useState<false>(false);
  const [chats, setChats] = useState<ChatsResponseProps[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      getChats(token).then((data) => {
        if (data) {
          setChats(data);
        }
      });
    }
  }, [token]);

  useEffect(() => {
    socket.on("new-chat", (is) => {
      if (is) {
        if (token) {
          getChats(token).then((data) => {
            if (data) {
              setChats(data);
            }
          });
        }
      }
    });

    return () => {
      socket.off("new-chat");
    };
  }, [token]);

  return (
    <Box w={"100%"} display={"flex "} flexDir={"column"} px={1}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex alignItems={"center"} gap={2}>
          <Text as={"h2"} fontWeight={"bold"} fontSize={"lg"}>
            Messages{" "}
            <Text as={"span"} color={"primary.100"}>
              48 new
            </Text>
          </Text>
        </Flex>

        <CreateGroupDialog />
      </Flex>

      <InputGroup>
        <InputRightElement pointerEvents="none">
          <LuSearch color="gray.300" />
        </InputRightElement>
        <Input type="tel" placeholder="Search anything" />
      </InputGroup>

      <MessageSection
        title={
          <>
            <Box bg={"primary.100"} rounded={"4px"} p={1}>
              <LuHash />
            </Box>
            GROUPS & CHANNELS;
          </>
        }
      >
        {chats.map((chat) => {
          if (chat.isGroup) {
            return (
              <MessageBox
                key={chat.id}
                chatId={chat.id}
                msg={chat.Message[0] || { content: "no messages" }}
                image={chat.image || ""}
                name={chat.name as string}
              />
            );
          }
        })}
      </MessageSection>

      <MessageSection title="ALL MESSAGES">
        {chats.map((chat) => {
          if (!chat.isGroup) {
            return (
              <MessageBox
                key={chat.id}
                chatId={chat.id}
                msg={chat.Message[0] || { content: "no messages" }}
                image={chat.Member[0].User.image || ""}
                name={chat.Member[0].User.name}
                isBordered
              />
            );
          }
        })}
      </MessageSection>
    </Box>
  );
};

export default ChatsContainer;

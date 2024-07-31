/* eslint-disable @typescript-eslint/no-unused-vars */
import { BoxProps, Flex } from "@chakra-ui/react";
import React from "react";
import NavBar from "../templates/NavBar";
import ChatPanel from "../templates/ChatPanel";
import MainView from "../atoms/MainView";
import MessageInputBox from "../organisms/MessageInputBox";

import { useSelector } from "react-redux";
import { RootState } from "../../features/state_management/store/store";
import { ChatInfo } from "../../types";

const MainViewLayout = ({
  children,
  props,
  chat,
}: {
  children?: React.ReactNode;
  props?: BoxProps;
  chat: ChatInfo;
}) => {
  const { user } = useSelector((state: RootState) => state.user);

  if (chat) {
    const getName = (): string => {
      if (user.id === chat.Member[0].User.id) {
        return chat.Member[1].User.name;
      } else {
        return chat.Member[0].User.name;
      }
    };

    const getImage = (): string | null => {
      if (user.id === chat.Member[0].User.id) {
        return chat.Member[1].User.image;
      } else {
        return chat.Member[0].User.image;
      }
    };

    return (
      <Flex as={"main"} w={"100%"} h={"100vh"} ml={"14"}>
        <ChatPanel />
        <Flex className="chat-bg" w={"100%"} flexDir={"column"}>
          <MainView {...props} overflow={"auto"} position={"relative"}>
            <NavBar
              name={chat.isGroup ? (chat.name as string) : getName()}
              image={
                chat.isGroup ? (chat.image as string) : (getImage() as string)
              }
            />
            {children}
          </MainView>

          <MessageInputBox chatId={chat.id} />
        </Flex>
      </Flex>
    );
  }
};

export default MainViewLayout;

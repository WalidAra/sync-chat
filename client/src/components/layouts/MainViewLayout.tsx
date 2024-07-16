/* eslint-disable @typescript-eslint/no-unused-vars */
import { BoxProps, Flex } from "@chakra-ui/react";
import React from "react";
import NavBar from "../templates/NavBar";
import ChatPanel from "../templates/ChatPanel";
import ChatInfoProvider from "../../providers/ChatInfoProvider";
import MainView from "../atoms/MainView";
import MessageInputBox from "../organisms/MessageInputBox";

const MainViewLayout = ({
  children,
  chatId,
  props,
  isGroup = false,
}: {
  children?: React.ReactNode;
  chatId: string;
  isGroup?: boolean;
  props?: BoxProps;
}) => {
  return (
    <Flex w={"100%"} h={"100vh"} ml={"14"}>
      <ChatPanel />
      <ChatInfoProvider>
        <Flex
          className="chat-bg"
          w={"100%"}
          flexDir={"column"}
        >
          <MainView {...props} overflow={"auto"} position={"relative"}>
            <NavBar />
            {children}
          </MainView>

          <MessageInputBox />
        </Flex>
      </ChatInfoProvider>
    </Flex>
  );
};

export default MainViewLayout;

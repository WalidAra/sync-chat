/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex } from "@chakra-ui/react";
import React from "react";
import NavBar from "../templates/NavBar";
import ChatPanel from "../templates/ChatPanel";
import ChatInfoProvider from "../../providers/ChatInfoProvider";
import ChatInfoDrawer from "../organisms/ChatInfoDrawer";
const MainViewLayout = ({
  children,
  chatId,
  isGroup = false,
}: {
  children: React.ReactNode;
  chatId: string;
  isGroup?: boolean;
}) => {
  return (
    <>
      <ChatPanel />
      <ChatInfoProvider>
        <Flex flexDir={"column"} w={"100%"} h={"100vh"}>
          <NavBar />
          {children}
        </Flex>
        <ChatInfoDrawer />
      </ChatInfoProvider>
    </>
  );
};

export default MainViewLayout;

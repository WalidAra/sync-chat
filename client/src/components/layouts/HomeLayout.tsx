import React from "react";
import SideBar from "../templates/SideBar";
import { Box } from "@chakra-ui/react";
import ChatPanel from "../templates/ChatPanel";
import NavBar from "../templates/NavBar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box display={"flex"} bg={"Background.100"} w={"100%"} height={"100vh"}>
      <SideBar />
      <ChatPanel />

      <Box
        display={"flex"}
        flexDir={"column"}
        w={"100%"}
        h={"100vh"}
        backdropFilter="blur(10px)"
      >
        <NavBar />
        {children}
      </Box>
    </Box>
  );
};

export default HomeLayout;

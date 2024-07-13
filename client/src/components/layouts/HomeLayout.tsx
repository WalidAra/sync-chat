import React from "react";
import SideBar from "../templates/SideBar";
import { Flex } from "@chakra-ui/react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex bg={"Background.100"} w={"100%"} height={"100vh"}>
      <SideBar />
      {children}
    </Flex>
  );
};

export default HomeLayout;

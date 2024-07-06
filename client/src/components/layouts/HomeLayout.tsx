import React from "react";
import SideBar from "../templates/SideBar";
import { Box } from "@chakra-ui/react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box display={"flex"} bg={"Background.100"} w={"100%"} height={"100vh"}>
      <SideBar />
      {children}
    </Box>
  );
};

export default HomeLayout;

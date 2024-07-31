/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from "react";
import SideBar from "../templates/SideBar";
import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../features/state_management/store/store";
import socket from "../../utils/socket";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket connected");
    });

    if (isLoggedIn) {
      socket.emit("user-activated", {
        id: user.id,
        connectedAt: new Date(Date.now()),
      });
    }

    return () => {
      socket.off("connect");
    };
    
  }, [isLoggedIn]);

  return (
    <Flex bg={"Background.100"} w={"100%"} height={"100vh"}>
      <SideBar />
      {children}
    </Flex>
  );
};

export default HomeLayout;

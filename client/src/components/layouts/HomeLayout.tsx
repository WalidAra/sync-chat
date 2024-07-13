/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import SideBar from "../templates/SideBar";
import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../features/state_management/store/store";
import { io } from "socket.io-client";
const socket = io("http://localhost:2000/");

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => state.user).user;

  useEffect(() => {
    socket.on("connect", () => {
      console.log("user online");
    });

    socket.emit("user-activated", {
      id: user.id,
      connectedAt: new Date(Date.now()),
    });

    socket.emit("user-online", user.id);

    return () => {
      socket.off("connect");
    };
  }, [user.id]);

  return (
    <Flex bg={"Background.100"} w={"100%"} height={"100vh"}>
      <SideBar />
      {children}
    </Flex>
  );
};

export default HomeLayout;

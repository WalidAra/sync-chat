/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Avatar, Box, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import socket from "../../utils/socket";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const OnlineNPCS = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("online-friends", (data) => {
      setUsers(data);
    });

    if (token) {
      socket.emit("user-online", token);
    }

    return () => {
      socket.off("online-friends");
    };
  }, [token]);

  const jumpToChat = async (userId: string) => {
    const res = await useFetch({
      feature: "/chat",
      method: "POST",
      body: { isGroup: false, members: [userId] },
      endPoint: "/create-or-join",
      token,
    });

    console.log('====================================');
    console.log(res);
    console.log('====================================');

    // if (res.status === true) {
    //   navigate(`/chats/${res.data.id}`);
    // }
  };

  return (
    <Box>
      <Stack
        w={"100%"}
        direction="row"
        py={2}
        borderBottomWidth={"1px"}
        overflow={"auto"}
        h={"49px"}
      >
        {users.length > 0 ? (
          users.map((user: any) => (
            <Avatar
              onClick={() => jumpToChat(user.User.id)}
              cursor={"pointer"}
              size={"sm"}
              key={user.User.id}
              src={user.User.image}
            />
          ))
        ) : (
          <Text textAlign={"center"}>Its quite for now</Text>
        )}
      </Stack>
    </Box>
  );
};

export default OnlineNPCS;

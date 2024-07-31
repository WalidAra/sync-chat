/* eslint-disable @typescript-eslint/no-explicit-any */

import { Avatar, Box, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import socket from "../../utils/socket";

const OnlineNPCS = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);

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
            <Avatar size={"sm"} key={user.User.id} src={user.User.image} />
          ))
        ) : (
          <Text textAlign={"center"}>Its quite for now</Text>
        )}
      </Stack>
    </Box>
  );
};

export default OnlineNPCS;
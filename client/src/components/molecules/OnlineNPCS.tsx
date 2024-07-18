/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Box, Stack } from "@chakra-ui/react";
import socket from "../../utils/socket";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../features/state_management/store/store";

const OnlineNPCS = () => {
  const { id } = useSelector((state: RootState) => state.user).user;
  const [onlineFriends, setOnlineFriends] = useState<object[]>([]);

  useEffect(() => {
    socket.on("online-friends", (data) => {
      setOnlineFriends(data);
      console.log("friends : ", data);
    });

    socket.emit("user-online", id);
  }, [id]);

  return (
    <Box>
      <Stack
        w={"100%"}
        direction="row"
        py={2}
        borderBottomWidth={"1px"}
        overflow={"auto"}
      >
        {onlineFriends.length > 0 ? (
          onlineFriends.map((u: any) => {
            return (
              <Avatar name="Oshigaki Kisame" src="https://bit.ly/broken-link" />
            );
          })
        ) : (
          <div>u have no friends loser</div>
        )}
      </Stack>
    </Box>
  );
};

export default OnlineNPCS;

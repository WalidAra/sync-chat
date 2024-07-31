/* eslint-disable react-hooks/rules-of-hooks */

import { Avatar, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import socket from "../../utils/socket";
import { FriendRequest as FriendRequestProps } from "../../types";

const FriendRequest = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState<FriendRequestProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await useFetch({
        feature: "/user",
        method: "GET",
        token,
        endPoint: "/friend-requests",
      });

      if (res.status === true) {
        setUsers(res.data);
      }
    };

    if (token) {
      getData();
    }
  }, [token]);

  useEffect(() => {
    socket.on("friend-requests", (data) => {
      setUsers((prev) => [...prev, data]);
    });
  }, []);

  const acceptRequest = async (id: string , index:number) => {
    if (token && id) {
      socket.emit("accept-friend-request", { token, senderId: id });

      setUsers((prev) => {
        prev.splice(index, 1);
        return [...prev];
      });
    }
  };

  const declineRequest = async () => {};

  return (
    <Flex
      ml={14}
      w={"100%"}
      flexDir={"column"}
      py={10}
      gap={4}
      alignItems={"center"}
      as="main"
    >
      <Heading>Friend Requests</Heading>
      <Text>Manage the friend requests you've received.</Text>

      <VStack>
        {users.map((u: FriendRequestProps , index:number) => (
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            w={"450px"}
            borderWidth={1}
            borderRadius={8}
            p={3}
          >
            <Flex gap={2} alignItems={"center"}>
              <Avatar src={u.sender.image} />

              <Flex flexDirection={"column"}>
                <Text>{u.sender.name}</Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  {u.sender.email}
                </Text>
              </Flex>
            </Flex>
            <Flex gap={2} alignItems={"center"}>
              <Button
                onClick={() => acceptRequest(u.sender.id , index)}
                size={"sm"}
                variant={"outline"}
              >
                Accept
              </Button>
              <Button onClick={declineRequest} size={"sm"} variant={"ghost"}>
                Decline
              </Button>
            </Flex>
          </Flex>
        ))}
      </VStack>
    </Flex>
  );
};

export default FriendRequest;

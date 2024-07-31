/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */

import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useFetch } from "../../hooks/useFetch";
import { Client, Friend } from "../../types";
import socket from "../../utils/socket";

const FindFriends = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState<(Client & Friend)[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await useFetch({
        feature: "/user",
        method: "GET",
        endPoint: "/users",
        token,
      });

      if (res.status === true) {
        setUsers(res.data);
      }
    };

    if (token) {
      getData();
    }
  }, [token]);

  const sendFriendRequest = async (receiverId: string) => {
    socket.emit("send-friend-request", {
      receiverId,
      token,
    });

    const userIndex = users.findIndex((user) => user.id === receiverId);
    const newUsers = [...users];
    newUsers.splice(userIndex, 1);
    setUsers(newUsers);
  };

  return (
    <Box w={"100%"} as="main" ml={"14"} overflow={"auto"} py={20}>
      <Flex w={{ sm: "95%", md: "80%" }} m={"auto"} flexDir={"column"}>
        <Heading>Find Friends</Heading>

        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text>Search for new friends to connect with on Reel Time.</Text>
          <Input size={"sm"} w={"400px"} placeholder="Search for friends" />
        </Flex>

        <Flex w={"100%"} alignItems={"center"} p={4} gap={6} flexWrap={"wrap"}>
          {users.map((user: any) => (
            <Card w={72}>
              <CardBody>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name={user.name} src={user.image} />

                  <Box>
                    <Heading size="sm"> {user.name} </Heading>
                    <Text>@{user.name.replace(/\s+/g, "")}</Text>
                  </Box>
                </Flex>
              </CardBody>

              <CardFooter>
                <Button
                  onClick={() => sendFriendRequest(user.id)}
                  w={"full"}
                  variant={"outline"}
                  fontWeight={500}
                >
                  Send friend request
                </Button>
              </CardFooter>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default FindFriends;

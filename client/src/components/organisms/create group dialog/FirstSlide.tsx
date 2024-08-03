/* eslint-disable react-hooks/rules-of-hooks */
import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import { useAuth } from "../../../hooks/useAuth";
import { useFetch } from "../../../hooks/useFetch";
import { LuCheck } from "react-icons/lu";
import { useGroupChat } from "../../../providers/CreateGroupChatProvider";

const FirstSlide = () => {
  const { token } = useAuth();
  const {selectedUsers , setSelectedUsers , setUsers , users} = useGroupChat();

  useEffect(() => {
    const getData = async () => {
      const res = await useFetch({
        feature: "/user",
        method: "GET",
        endPoint: "/friends",
        token: token,
      });
      console.log(res);
      if (res.status === true) {
        setUsers(res.data);
      }
    };

    if (token) {
      getData();
    }
  }, [setUsers, token]);

  return (
    <Flex flexShrink={0} w={'100%'} flexDir={"column"}>
      <Box py={1.5} borderTopWidth={"1px"} borderBottomWidth={"1px"}>
        <InputGroup>
          <InputLeftElement ml={2} color="gray.500" pb={2} pointerEvents="none">
            <LuSearch />
          </InputLeftElement>
          <Input
            ml={2}
            // value={msg}
            // onChange={(e) => {
            //   setMsg(e.target.value);
            // }}
            size={"sm"}
            type="text"
            placeholder="Search user..."
            sx={{
              border: "none",
              outline: "none",
              boxShadow: "none",
              _hover: {
                border: "none",
                outline: "none",
                boxShadow: "none",
              },
              _focus: {
                border: "none",
                outline: "none",
                boxShadow: "none",
              },
              _active: {
                border: "none",
                outline: "none",
                boxShadow: "none",
              },
            }}
          />{" "}
        </InputGroup>
      </Box>

      <Flex px={2} py={2} flexDir={"column"} h={"250px"} overflow={"auto"}>
        {users.map((user) => {
          return (
            <Button
              onClick={() => {
                const target = selectedUsers.find((u) => u.id === user.id);
                if (!target) {
                  setSelectedUsers((prev) => [...prev, user]);
                } else {
                  setSelectedUsers((prev) =>
                    prev.filter((u) => u.id !== user.id)
                  );
                }
              }}
              rounded={"sm"}
              key={user.id}
              justifyContent={"space-between"}
              w={"100%"}
              gap={2}
              h={"auto"}
              alignItems={"center"}
              py={2.5}
              textAlign={"start"}
              variant={"ghost"}
              fontWeight={400}
            >
              <Flex gap={2} alignItems={"center"}>
                <Avatar src={user.User.image || ""} name={user.User.name} />

                <Flex flexDir={"column"}>
                  <Text fontWeight={600}> {user.User.name} </Text>
                  <Text fontSize={14} color={"gray.600"}>
                    {user.User.email}
                  </Text>
                </Flex>
              </Flex>

              {selectedUsers.find((u) => u.id === user.id) && <LuCheck style={{fontSize: "24px"}} />}
            </Button>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default FirstSlide;

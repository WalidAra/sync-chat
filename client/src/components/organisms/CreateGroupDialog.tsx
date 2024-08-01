/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  IconButton,
  useDisclosure,
  Button,
  Text,
  AlertDialogCloseButton,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Avatar,
} from "@chakra-ui/react";
import { LuPenSquare, LuSearch } from "react-icons/lu";
import { Client, Friend } from "../../types";
import { useAuth } from "../../hooks/useAuth";
import { useFetch } from "../../hooks/useFetch";
import SelectMembers from "./create group dialog/SelectMembers";
import { motion } from "framer-motion";

const CreateGroupDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<any>();
  const { token } = useAuth();
  const [friends, setFriends] = useState<(Friend & { User: Client })[]>([]);
  const [selected, setSelected] = useState<(Friend & { User: Client })[]>([]);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const getData = async () => {
      const res = await useFetch({
        feature: "/user",
        method: "GET",
        endPoint: "/friends",
        token: token,
      });

      if (res.status) {
        setFriends(
          res.data as (Friend & {
            User: Client;
          })[]
        );
      }
    };

    if (token) {
      getData();
    }
  }, [token]);
  return (
    <>
      <IconButton
        onClick={onOpen}
        isRound={true}
        variant="ghost"
        colorScheme="blackAlpha"
        aria-label="Done"
        fontSize="20px"
        icon={<LuPenSquare />}
      />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader
              display={"flex"}
              flexDir={"column"}
              gap={2}
              px={0}
              fontSize="lg"
              fontWeight="bold"
            >
              <Flex flexDir={"column"} px={6}>
                New message.
                <Text fontSize={"14px"} color={"gray.600"} fontWeight={"400"}>
                  Invite a user to this thread. This will create a new group
                  message.
                </Text>
              </Flex>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <LuSearch color="gray.300" />
                </InputLeftElement>
                <Input type="tel" placeholder="Search by username" />
              </InputGroup>
            </AlertDialogHeader>
            <AlertDialogCloseButton />

            <AlertDialogBody overflow={"hidden"}>
              <motion.div
                transition={{
                  type: "keyframes",
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                animate={{ translateX: `-${page * 100}%` }}
                className="w-full flex"
              >
                <SelectMembers
                  friends={friends}
                  setFriends={setFriends}
                  setSelected={setSelected}
                />
              </motion.div>
            </AlertDialogBody>

            <AlertDialogFooter
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderTopWidth={"1px"}
            >
              <Stack
                display={"flex"}
                direction="row"
                w={"70%"}
                overflow={"auto"}
              >
                {selected.map((u, index) => (
                  <Avatar
                    onClick={() => {
                      setSelected((prev) => {
                        const newArr = [...prev];
                        newArr.splice(index, 1);
                        return newArr;
                      });
                      setFriends((prev) => [...prev, u]);
                    }}
                    size={"sm"}
                    name={u.User.name}
                    src={u.User.image || ""}
                  />
                ))}
              </Stack>

              <Button
                onClick={async () => {
                  // const res = await useFetch({
                  //   feature: "/chat",
                  //   method: "POST",
                  //   endPoint: "/create-or-join",
                  //   token: token,
                  // });

                  // onClose();

                  setPage(2);
                }}
                colorScheme="blue"
                bg={"primary.100"}
                ml={3}
              >
                Continue
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default CreateGroupDialog;

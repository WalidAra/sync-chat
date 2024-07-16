/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
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
  Box,
  Stack,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import { LuPenSquare, LuSearch } from "react-icons/lu";

const CreateGroupDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<any>();
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
                <Input type="tel" placeholder="Phone number" />
              </InputGroup>
            </AlertDialogHeader>
            <AlertDialogCloseButton />

            <AlertDialogBody>
              <Box height={"260px"} overflow={"auto"}>
                <Flex mb={3} flex="1" gap="4" alignItems="center">
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                    size={"sm"}
                  />

                  <Box>
                    <Heading size="sm">Segun Adebayo</Heading>
                    <Text>Creator, Chakra UI</Text>
                  </Box>
                </Flex>
              </Box>
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
                <Avatar
                  size={"sm"}
                  name="Oshigaki Kisame"
                  src="https://bit.ly/broken-link"
                />
                <Avatar
                  size={"sm"}
                  name="Sasuke Uchiha"
                  src="https://bit.ly/broken-link"
                />
                <Avatar size={"sm"} src="https://bit.ly/broken-link" />
              </Stack>

              <Button colorScheme="blue" bg={"primary.100"} ml={3}>
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Flex,
  Text,
  Box,
  Button,
  Badge,
  Avatar,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { LuTrash2 } from "react-icons/lu";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { RiLayout4Fill } from "react-icons/ri";
import { ChatInfo } from "../../types";

type Props = {
  chat: ChatInfo;
};

const ToggleDrawer = ({ chat }: Props) => {
  // const { onToggle } = useChatDrawer();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        isRound={true}
        variant="ghost"
        colorScheme="blackAlpha"
        aria-label="Done"
        fontSize="20px"
        color={"primary.100"}
        icon={<RiLayout4Fill style={{ fontSize: "24px" }} />}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          borderLeftWidth={"1px"}
          display={"flex"}
          flexDir={"column"}
        >
          <DrawerCloseButton />
          <DrawerHeader fontWeight={"base"}>
            {chat.isGroup && (
              <Flex
                alignItems={"center"}
                borderBottomWidth={"1px"}
                justifyContent={"space-between"}
              >
                <Flex alignItems={"center"} gap={2}>
                  <Text color={"primary.100"}>
                    <PiDotsThreeCircleFill style={{ fontSize: "30px" }} />
                  </Text>

                  <Text>Group info</Text>
                </Flex>
              </Flex>
            )}

            <Flex
              flexDir={"column"}
              mt={4}
              alignItems={"center"}
              gap={2}
              w={"100%"}
            >
              <Avatar
                src={
                  chat.isGroup
                    ? chat.image || ""
                    : chat.Member[0].User.image || ""
                }
                size={"xl"}
              />

              <Flex flexDir={"column"} alignItems={"center"} gap={0}>
                <Text>
                  {chat.isGroup ? chat.name : chat.Member[0].User.name}
                </Text>
                {chat.isGroup && <Text>{chat.Member.length} members</Text>}
              </Flex>
            </Flex>

            <Box w={"100%"} py={2} borderBottomWidth={"1px"}>
              <Text as={"span"}>Description:</Text>
              <Text fontSize={16}>
                {chat.isGroup
                  ? "is a group"
                  : chat.Member[0].User.bio || "No bio."}
              </Text>
            </Box>
            {chat.isGroup && (
              <Text fontSize={16}>
                Members
                <Text as={"span"} color={"primary.100"}>
                  (20)
                </Text>
              </Text>
            )}
          </DrawerHeader>

          <DrawerBody>
            <Tabs variant="soft-rounded" colorScheme="cyan">
              <TabList
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bg={"gray.100"}
                rounded={"2xl"}
              >
                <Tab>Photos</Tab>
                <Tab>Videos</Tab>
                <Tab>Files</Tab>
              </TabList>
              <TabPanels>
                <TabPanel
                  w={"100%"}
                  h={"160px"}
                  bg={"gray.100"}
                  rounded={"xl"}
                  mt={2}
                  overflow={"auto"}
                  display={"flex"}
                  gap={2}
                  p={2}
                >
                  <Image
                    backgroundSize={"cover"}
                    rounded={"xl"}
                    h={"100%"}
                    w={"auto"}
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                  />
                </TabPanel>
                <TabPanel
                  w={"100%"}
                  h={"160px"}
                  bg={"gray.100"}
                  rounded={"xl"}
                  mt={2}
                  overflow={"auto"}
                  display={"flex"}
                  gap={4}
                  p={2}
                ></TabPanel>
                <TabPanel
                  w={"100%"}
                  h={"160px"}
                  bg={"gray.100"}
                  rounded={"xl"}
                  mt={2}
                  overflow={"auto"}
                  display={"flex"}
                  gap={4}
                  p={2}
                ></TabPanel>
              </TabPanels>
            </Tabs>
            {chat.isGroup && (
              <Box
                display={"flex"}
                flexDir={"column"}
                flex={"1 1 0%"}
                overflow={"hidden"}
              >
                <Box flex={"1 1 0%"} overflow={"auto"}>
                  <Flex
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    w={"100%"}
                    py={4}
                    px={2}
                  >
                    <Flex gap={2} alignItems={"center"}>
                      <Avatar size={"sm"} />
                      <Text>Zenr</Text>
                    </Flex>

                    <Badge>OWNER</Badge>
                  </Flex>
                </Box>
              </Box>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Box w={"full"} mt={4} borderTopWidth={"1px"}>
              <Button
                flexShrink={0}
                color={"red"}
                fontWeight={400}
                w={"full"}
                leftIcon={<LuTrash2 />}
                variant={"ghost"}
              >
                Delete and Leave
              </Button>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ToggleDrawer;

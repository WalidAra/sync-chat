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
} from "@chakra-ui/react";
import React from "react";
import { LuTrash2 } from "react-icons/lu";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { RiLayout4Fill } from "react-icons/ri";

type Props = {
  isGroup: boolean;
};

const ToggleDrawer = ({ isGroup }: Props) => {
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
          py={2}
          px={4}
          borderLeftWidth={"1px"}
          display={"flex"}
          flexDir={"column"}
        >
          <DrawerCloseButton />
          <DrawerHeader fontWeight={"base"}>
            {isGroup && (
              <Flex
                alignItems={"center"}
                borderBottomWidth={"1px"}
                justifyContent={"space-between"}
                py={2}
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
              <Avatar size={"2xl"} />

              <Flex flexDir={"column"} alignItems={"center"} gap={0}>
                <Text>ExoticAra</Text>
                <Text>22 members</Text>
              </Flex>
            </Flex>

            <Box w={"100%"} py={2} borderBottomWidth={"1px"}>
              <Text>
                <Text as={"span"}>Description:</Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                hic quo modi ipsa atque quos vero doloremque impedit dolorem
                eaque! Facere
              </Text>
            </Box>
            <Text>
              Members{" "}
              <Text as={"span"} color={"primary.100"}>
                (20)
              </Text>{" "}
            </Text>
          </DrawerHeader>

          <DrawerBody>
            <Box
              display={"flex"}
              flexDir={"column"}
              flex={"1 1 0%"}
              overflow={"hidden"}
              mt={4}
            >
              <Box mt={4} flex={"1 1 0%"} overflow={"auto"}>
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

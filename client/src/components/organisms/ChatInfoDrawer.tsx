import { Avatar, Badge, Box, Button, Flex, Text } from "@chakra-ui/react";
import { useChatDrawer } from "../../hooks";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import CloseDrawerBtn from "../atoms/CloseDrawerBtn";
import { LuTrash2 } from "react-icons/lu";

type Props = {
  isGroup: boolean;
};

const ChatInfoDrawer = ({ isGroup }: Props) => {
  const { isOpen } = useChatDrawer();

  return (
    <Box
      w={isOpen ? "320px" : "0px"}
      transitionDuration={"0.2s "}
      flexShrink={0}
      h={"100vh"}
      borderLeftWidth={"1px"}
      display={isOpen ? "flex" : "none"}
      flexDir={"column"}
      py={2}
      px={4}
      position={"relative"}
    >
      {isGroup ? (
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

          <CloseDrawerBtn />
        </Flex>
      ) : (
        <Box py={2} px={4} position={"absolute"} top={0} right={0}>
          <CloseDrawerBtn />
        </Box>
      )}

      <Flex flexDir={"column"} mt={4} alignItems={"center"} gap={2} w={"100%"}>
        <Avatar size={"2xl"} />

        <Flex flexDir={"column"} alignItems={"center"} gap={0}>
          <Text>ExoticAra</Text>
          <Text>22 members</Text>
        </Flex>
      </Flex>

      <Box w={"100%"} py={2} borderBottomWidth={"1px"}>
        <Text>
          <Text as={"span"}>Description:</Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam hic quo
          modi ipsa atque quos vero doloremque impedit dolorem eaque! Facere
        </Text>
      </Box>

      <Box
        display={"flex"}
        flexDir={"column"}
        flex={"1 1 0%"}
        overflow={"hidden"}
        mt={4}
      >
        <Text>
          Members{" "}
          <Text as={"span"} color={"primary.100"}>
            (20)
          </Text>{" "}
        </Text>

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
    </Box>
  );
};

export default ChatInfoDrawer;

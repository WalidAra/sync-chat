/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import UserShortCutCard from "../organisms/UserShortCutCard";
import { LuPhone, LuSearch } from "react-icons/lu";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import ToggleDrawer from "../atoms/ToggleDrawer";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import socket from "../../utils/socket";
import { ChatInfo } from "../../types";

type Props = {
  name: string;
  image: string;
  userId: string | null;
  chat: ChatInfo;
};

const NavBar = ({ name, image, userId , chat }: Props) => {
  const [isOnline, setIsOnline] = useState<boolean>(false);

  useEffect(() => {
    if (userId) {
      socket.emit("request-user-status", userId);
    }

    socket.on("request-user-status", (data) => {
      console.log(data);
    });

    return () => {
      socket.off("response-user-status", (isOn) => {
        setIsOnline(isOn);
      });
    };
  }, [userId]);

  return (
    <Box
      as="header"
      position="sticky"
      w={"100%"}
      top="0"
      zIndex="10"
      // height="60px"
      px="4"
      py={"2"}
      backdropFilter="blur(62px)"
      borderBottomWidth={"1px"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={"transparent"}
    >
      <UserShortCutCard src={image || ""} name={name}>
        <Text color={"text.100"} fontSize={"14px"}>
          {!isOnline ? (
            <Flex alignItems={"center"} gap={2}>
              <Box
                w={2}
                h={2}
                className="online-status"
                flexShrink={"0"}
                rounded={"full"}
                bg={"green.500"}
                
              ></Box>
              Online
            </Flex>
          ) : (
            <Flex alignItems={"center"} gap={1}>
              <Box
                w={2}
                h={2}
                flexShrink={"0"}
                rounded={"full"}
                bg={"gray.400"}
              ></Box>
              Offline
            </Flex>
          )}
        </Text>
      </UserShortCutCard>

      <Flex alignItems={"center"} gap={2}>
        <Flex alignItems={"center"} px={2} gap={2} borderRightWidth={"1px"}>
          <IconButton
            isRound={true}
            variant="ghost"
            colorScheme="blackAlpha"
            aria-label="Done"
            fontSize="20px"
            icon={<LuPhone />}
          />
          <IconButton
            isRound={true}
            variant="ghost"
            colorScheme="blackAlpha"
            aria-label="Done"
            fontSize="20px"
            icon={<LuSearch />}
          />

          <Menu>
            <MenuButton
              isRound={true}
              variant="ghost"
              colorScheme="blackAlpha"
              aria-label="Done"
              fontSize="20px"
              as={IconButton}
              icon={<PiDotsThreeOutlineVerticalLight />}
            />
            <MenuList>
              <MenuItem>Block</MenuItem>
              <MenuItem color={"red"}>Delete</MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <ToggleDrawer chat={chat} />
      </Flex>
    </Box>
  );
};

export default NavBar;

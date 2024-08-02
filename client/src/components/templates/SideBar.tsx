import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FaPhoneAlt, FaUserFriends } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoChatbubbles } from "react-icons/io5";
import ThemeToggler from "../molecules/ThemeToggler";
import Logo from "../atoms/Logo";
import LogOutIconButton from "../molecules/LogOutIconButton";
import { GoBellFill } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <Box
      as="aside"
      position="fixed"
      insetY="0"
      left="0"
      zIndex="10"
      display={{ base: "none", sm: "flex" }}
      width="14"
      flexDirection="column"
      borderRightWidth="1px"
      bg="background.100"
      borderColor={"border.100"}
      justifyContent={"space-between"}
      alignItems={"center"}
      py={4}
      px={2}
    >
      <Logo width={40} height={40} />

      <Flex alignItems={"center"} gap={2} flexDir={"column"}>
        <Box
          borderBottomWidth={"1px"}
          gap={2}
          flexDir={"column"}
          display={"flex"}
        >
          <Link to={"/"}>
            <Box
              w={"100%"}
              className={
                pathname === "/" || pathname.includes("/chats")
                  ? "active-tab"
                  : ""
              }
              bg={
                pathname === "/" || pathname.includes("/chats")
                  ? "blue.100"
                  : "transparent"
              }
              rounded={"sm"}
            >
              <IconButton
                isRound={true}
                variant="ghost"
                colorScheme="blackAlpha"
                aria-label="Done"
                fontSize="20px"
                icon={<IoChatbubbles />}
              />
            </Box>
          </Link>
          <Link to={"/find-friends"}>
            <Box
              w={"100%"}
              className={pathname === "/find-friends" ? "active-tab" : ""}
              bg={pathname === "/find-friends" ? "blue.100" : "transparent"}
              rounded={"sm"}
            >
              <IconButton
                isRound={true}
                variant="ghost"
                colorScheme="blackAlpha"
                aria-label="Done"
                fontSize="20px"
                icon={<FaUserFriends />}
              />
            </Box>
          </Link>
        </Box>

        <Box
          borderBottomWidth={"1px"}
          gap={2}
          flexDir={"column"}
          display={"flex"}
        >
          <IconButton
            isRound={true}
            variant="ghost"
            colorScheme="blackAlpha"
            aria-label="Done"
            fontSize="20px"
            icon={<FaPhoneAlt />}
          />
        </Box>

        <Link to={"/settings"}>
          <Box
            w={"100%"}
            className={pathname === "/settings" ? "active-tab" : ""}
            bg={pathname === "/settings" ? "blue.100" : "transparent"}
            rounded={"sm"}
          >
            <IconButton
              isRound={true}
              variant="ghost"
              colorScheme="blackAlpha"
              aria-label="Done"
              fontSize="20px"
              icon={<IoMdSettings />}
            />
          </Box>
        </Link>
        <Link to={"/friend-requests"}>
          <Box
            w={"100%"}
            className={pathname === "/friend-requests" ? "active-tab" : ""}
            bg={pathname === "/friend-requests" ? "blue.100" : "transparent"}
            rounded={"sm"}
          >
            <IconButton
              isRound={true}
              variant="ghost"
              colorScheme="blackAlpha"
              aria-label="Done"
              fontSize="20px"
              icon={<GoBellFill />}
            />
          </Box>
        </Link>
        <LogOutIconButton />
      </Flex>

      <ThemeToggler />
    </Box>
  );
};

export default SideBar;

import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FaPhoneAlt, FaUserFriends } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoChatbubbles, IoLogOut } from "react-icons/io5";
import ThemeToggler from "../molecules/ThemeToggler";
import Logo from "../atoms/Logo";

const SideBar = () => {
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
      alignItems={'center'}
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
          <IconButton
            isRound={true}
            variant="ghost"
            colorScheme="blackAlpha"
            aria-label="Done"
            fontSize="20px"
            icon={<IoChatbubbles />}
          />
          <IconButton
            isRound={true}
            variant="ghost"
            colorScheme="blackAlpha"
            aria-label="Done"
            fontSize="20px"
            icon={<FaUserFriends />}
          />
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

        <IconButton
          isRound={true}
          variant="ghost"
          colorScheme="blackAlpha"
          aria-label="Done"
          fontSize="20px"
          icon={<IoMdSettings />}
        />
        <IconButton
          isRound={true}
          variant="ghost"
          colorScheme="blackAlpha"
          aria-label="Done"
          color={"red"}
          fontSize="20px"
          icon={<IoLogOut />}
        />
      </Flex>

      <ThemeToggler />
    </Box>
  );
};

export default SideBar;
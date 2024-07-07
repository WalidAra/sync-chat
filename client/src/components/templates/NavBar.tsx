import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import UserShortCutCard from "../organisms/UserShortCutCard";
import { LuPhone, LuSearch } from "react-icons/lu";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import CloseDrawerBtn from "../atoms/ToggleDrawer";

const NavBar = () => {
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
      <UserShortCutCard name="Zenr">
        <Text color={"text.100"} fontSize={"14px"}>
          Online
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
          <IconButton
            isRound={true}
            variant="ghost"
            colorScheme="blackAlpha"
            aria-label="Done"
            fontSize="20px"
            icon={<PiDotsThreeOutlineVerticalLight />}
          />
        </Flex>

        <CloseDrawerBtn />
      </Flex>
    </Box>
  );
};

export default NavBar;

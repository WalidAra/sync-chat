import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { LuHash, LuSearch } from "react-icons/lu";
import MessageBox from "../molecules/MessageBox";
import CreateGroupDialog from "./CreateGroupDialog";
// import { useState } from "react";

const ChatsContainer = () => {
  //   const [searchValue, setSearchValue] = useState<false>(false);

  return (
    <Box w={"100%"} display={"flex "} flexDir={"column"} px={1}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex alignItems={"center"} gap={2}>
          <Text as={"h2"} fontWeight={"bold"} fontSize={"lg"}>
            Messages{" "}
            <Text as={"span"} color={"primary.100"}>
              48 new
            </Text>
          </Text>
        </Flex>

        <CreateGroupDialog />
      </Flex>

      <InputGroup>
        <InputRightElement pointerEvents="none">
          <LuSearch color="gray.300" />
        </InputRightElement>
        <Input type="tel" placeholder="Search anything" />
      </InputGroup>

      <Flex mt={4} flexDir={"column"} gap={3} as="section">
        <Text
          fontWeight={500}
          fontSize={"14px"}
          as={"span"}
          display={"flex"}
          gap={2}
          alignItems={"center"}
        >
          <Box bg={"primary.100"} rounded={"4px"} p={1}>
            <LuHash />
          </Box>
          GROUPS & CHANNELS
        </Text>
        <Box w={"100%"} display={"flex"} flexDir={"column"}>
          <MessageBox />
        </Box>
      </Flex>
      <Flex mt={4} flexDir={"column"} gap={3} as="section">
        <Text
          fontWeight={500}
          fontSize={"14px"}
          as={"span"}
          display={"flex"}
          gap={2}
          alignItems={"center"}
        >
          ALL MESSAGES
        </Text>
        <Box w={"100%"} display={"flex"} flexDir={"column"}>
          <MessageBox isBordered />
          <MessageBox isBordered />
          <MessageBox isBordered />
          <MessageBox isBordered />
          <MessageBox isBordered />
          <MessageBox isBordered />
          <MessageBox isBordered />
          <MessageBox isBordered />
          <MessageBox isBordered />
          <MessageBox isBordered />
          <MessageBox isBordered />
          <MessageBox isBordered />
          <MessageBox isBordered />
          <MessageBox isBordered />
          <MessageBox isBordered />
          <MessageBox isBordered />
          <MessageBox isBordered />
          <MessageBox isBordered />
          <MessageBox isBordered />
          <MessageBox isBordered />
        </Box>
      </Flex>
    </Box>
  );
};

export default ChatsContainer;

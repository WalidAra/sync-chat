import { Box, Flex } from "@chakra-ui/react";
import FreshStartNote from "../../components/molecules/FreshStartNote";

const FreshStart = () => {
  return (
    <Flex w={"100%"} h={"100vh"} ml={"14"}>
      <Box
        w={"320px"}
        h={"100vh"}
        display={"flex"}
        flexDir={"column"}
        borderRightWidth="1px"
        flexShrink={0}
        py={2}
        px={3}
        gap={2}
        overflow={"auto"}
      >
        <FreshStartNote />
      </Box>

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        flexDir={"column"}
      >
        <FreshStartNote />
      </Flex>
    </Flex>
  );
};

export default FreshStart;

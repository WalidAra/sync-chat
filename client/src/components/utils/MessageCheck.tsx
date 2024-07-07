import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type Props = {
  isMyMsg: boolean;
};

const MessageCheck = ({ isMyMsg }: Props) => {
  if (!isMyMsg) {
    return (
      <Flex gap={4}>
        <Avatar />

        <Box
          display={"inline-flex"}
          flexDir={"column"}
          gap={2}
          maxWidth={"75%"}
        >
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text fontSize={"14px"} fontWeight={500}>
              Ezio
            </Text>
            <Text fontSize={"14px"}>4:40PM</Text>
          </Flex>

          <Box
            w={"inherit"}
            py={"2"}
            px={4}
            borderRadius={"0 16px 16px 16px"}
            bg={"white"}
            boxShadow={"0 25px 50px -12px rgba(196, 172, 169, 0.25)"}
          >
            <Text color={'gray.600'} >this is a message for everybody , i m batman</Text>
          </Box>
        </Box>
      </Flex>
    );
  } else if (isMyMsg) {
    return (
      <Flex flexDir={"column"} gap={2}>
        <Flex gap={2} justifyContent={"flex-end"} alignItems={"center"}>
          <Text fontSize={"14px"}>YOU</Text>
          <Text fontSize={"14px"}>4:30AM</Text>
          <Avatar size={"sm"} />
        </Flex>

        <Box
          w={"inherit"}
          py={"2"}
          px={4}
          borderRadius={"16px 0px 16px 16px"}
          bg={"primary.100"}
          color={"white"}
          boxShadow={"0 25px 50px -12px rgba(196, 172, 169, 0.25)"}
          ml={"auto"}
        >
          <Text color={'gray.50'} >this is a message for everybody , i m batman</Text>
        </Box>
      </Flex>
    );
  }
};

export default MessageCheck;

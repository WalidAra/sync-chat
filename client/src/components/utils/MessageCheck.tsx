import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../features/state_management/store/store";

type Props = {
  isMyMsg: boolean;
  name: string;
  image: string;
  content: string;
  createdAt: string;
};

const MessageCheck = ({ isMyMsg, image, name, content, createdAt }: Props) => {
  const { user } = useSelector((state: RootState) => state.user);

  if (!isMyMsg) {
    return (
      <Flex gap={4}>
        <Avatar name={name} src={image} />

        <Box
          display={"inline-flex"}
          flexDir={"column"}
          gap={2}
          w={"auto"}
          maxWidth={"60%"}
        >
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text fontSize={"14px"} fontWeight={500}>
              {name}
            </Text>
            <Text ml={2} fontSize={"14px"}>
              {createdAt}
            </Text>
          </Flex>

          <Box
            mr={"auto"}
            w={"inline"}
            py={"2"}
            px={4}
            borderRadius={"0 16px 16px 16px"}
            bg={"white"}
            boxShadow={
              " rgba(50, 50, 93, 0.02) 0px 13px 27px -5px, rgba(0, 0, 0, 0.2) 0px 8px 16px -8px;"
            }
          >
            <Text color={"gray.600"}>{content}</Text>
          </Box>
        </Box>
      </Flex>
    );
  } else if (isMyMsg) {
    return (
      <Flex flexDir={"column"} gap={2}>
        <Flex gap={2} justifyContent={"flex-end"} alignItems={"center"}>
          <Text fontSize={"14px"}>YOU</Text>
          <Text fontSize={"14px"}>{createdAt}</Text>
          <Avatar src={user.image || ""} size={"sm"} />
        </Flex>

        <Box
          w={"inherit"}
          maxWidth={"60%"}
          py={"2"}
          px={4}
          borderRadius={"16px 0px 16px 16px"}
          bg={"primary.100"}
          color={"white"}
          boxShadow={
            " rgba(50, 50, 93, 0.02) 0px 13px 27px -5px, rgba(0, 0, 0, 0.2) 0px 8px 16px -8px;"
          }
          ml={"auto"}
        >
          <Text color={"gray.50"}>{content}</Text>
        </Box>
      </Flex>
    );
  }
};

export default MessageCheck;

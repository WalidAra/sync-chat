import { Box, Flex, Text } from "@chakra-ui/react";

type Props = {
  title: string | React.ReactNode;
  children: React.ReactNode;
};



const MessageSection = ({ children, title }: Props) => {
  return (
    <Flex mt={4} w={"100%"} flexDir={"column"} gap={3} as="section">
      <Text
        fontWeight={500}
        fontSize={"14px"}
        as={"span"}
        display={"flex"}
        gap={2}
        alignItems={"center"}
      >
        {title}
      </Text>
      <Box w={"100%"} display={"flex"} flexDir={"column"}>
        

        {children}
      </Box>
    </Flex>
  );
};

export default MessageSection;

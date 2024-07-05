import { Avatar, Flex, Text } from "@chakra-ui/react";

type Props = {
  isMsg?: boolean;
  name: string;
  children?: React.ReactNode;
};

const UserShortCutCard = ({ isMsg = false, name, children }: Props) => {
  return (
    <Flex alignItems={"center"} gap={3}>
      <Avatar size={isMsg ? "md" : "sm"} />

      <Flex flexDir={"column"}>
        <Text as={"h2"} fontWeight={"600"}>
          {name}
        </Text>
        {children}
      </Flex>
    </Flex>
  );
};

export default UserShortCutCard;

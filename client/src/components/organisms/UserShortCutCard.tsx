import { Avatar, AvatarBadge, Flex, Text } from "@chakra-ui/react";

type Props = {
  isMsg?: boolean;
  name: string;
  children?: React.ReactNode;
  gap?: number;
};

const UserShortCutCard = ({ isMsg = false, name, children , gap = 0 }: Props) => {
  return (
    <Flex alignItems={"center"} gap={3}>
      <Avatar size={isMsg ? "md" : "sm"}>
        {isMsg && <AvatarBadge boxSize="1em" bg="green.500" />}
      </Avatar>

      <Flex gap={gap} flexDir={"column"}>
        <Text as={"h2"} fontWeight={"600"}>
          {name}
        </Text>
        {children}
      </Flex>
    </Flex>
  );
};

export default UserShortCutCard;
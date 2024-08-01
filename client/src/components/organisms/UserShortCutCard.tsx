/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, AvatarBadge, Flex, Grid, Text } from "@chakra-ui/react";

type Props = {
  isMsg?: boolean;
  name: string;
  children?: React.ReactNode;
  gap?: number;
  src: string ;
};

const UserShortCutCard = ({
  isMsg = false,
  name,
  children,
  gap = 0,
  src
}: Props) => {
  return (
    <Grid gridTemplateColumns={"auto 1fr"} w={'100%'}  alignItems={"center"} gap={3}>
      <Avatar name={name} src={src} size={isMsg ? "md" : "sm"}>
        {isMsg && <AvatarBadge boxSize="1em" bg="green.500" />}
      </Avatar>

      <Flex gap={gap} w={'100%'}  alignItems={'start'} flexDir={"column"}>
        <Text as={"h2"} fontWeight={"600"}>
          {name}
        </Text>
        {children}
      </Flex>
    </Grid>
  );
};

export default UserShortCutCard;

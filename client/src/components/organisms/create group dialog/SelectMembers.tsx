import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Client, Friend } from "../../../types";

type Props = {
  friends: (Friend & { User: Client })[];
  setSelected: React.Dispatch<
    React.SetStateAction<
      (Friend & {
        User: Client;
      })[]
    >
  >;
  setFriends: React.Dispatch<
    React.SetStateAction<
      (Friend & {
        User: Client;
      })[]
    >
  >;
};

const SelectMembers = ({ friends, setFriends, setSelected }: Props) => {
  return (
    <Box height={"260px"} overflow={"auto"}>
      {friends.map((u, index) => (
        <Flex
          onClick={() => {
            setSelected((prev) => [...prev, u]);
            setFriends((prev) => {
              const newArr = [...prev];
              newArr.splice(index, 1);
              return newArr;
            });
          }}
          mb={3}
          flex="1"
          gap="4"
          alignItems="center"
        >
          <Avatar name={u.User.name} src={u.User.image || ""} size={"sm"} />

          <Box>
            <Heading size="sm"> {u.User.name} </Heading>
            <Text> {u.User.email} </Text>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default SelectMembers;

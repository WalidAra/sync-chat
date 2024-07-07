/* eslint-disable @typescript-eslint/no-unused-vars */
import { Badge, Box, Text } from "@chakra-ui/react";
import UserShortCutCard from "../organisms/UserShortCutCard";

type Props = {
  isBordered?: boolean;
};

const MessageBox = ({ isBordered = false }: Props) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={3}
      py={4}
      borderBottomWidth={isBordered ? "1px" : "0px"}
    >
      <UserShortCutCard gap={0} isMsg name="InfoBrains">
        <Text className="line-clamp-1" color={"text.100"} fontSize={"14px"}>
          When we do the next event guys ?
        </Text>
      </UserShortCutCard>

      <Box
        h={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Badge
          bg={"red"}
          rounded={"full"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          py={0.5}
          color={"white"}
        >
          4
        </Badge>

        <Text color={"text.100"} fontSize={"14px"}>
          12:52
        </Text>
      </Box>
    </Box>
  );
};

export default MessageBox;

import { Box, Button, Text } from "@chakra-ui/react";
import UserShortCutCard from "../organisms/UserShortCutCard";
import { Message } from "../../types";
import { formatDateTime } from "../../utils";
import { Link } from "react-router-dom";

type Props = {
  isBordered?: boolean;
  image: string;
  name: string;
  msg: Message;
  chatId: string;
};

const MessageBox = ({
  isBordered = false,
  image,
  name,
  msg,
  chatId,
}: Props) => {
  return (
    <Link to={`/chats/${chatId}`} style={{ width: "100%", display: "block" }}>
      <Button
        w={"100%"}
        display={"grid"}
        gridTemplateColumns={"1fr auto"} // Define two columns, one flexible and one auto-sized
        alignItems={"center"} // Center align items vertically
        py={2}
        borderBottomWidth={isBordered ? "1px" : "0px"}
        height={"auto"}
        variant={"ghost"}
        fontWeight={400}
        gap={2} // Adjust gap between items as needed
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          gridColumn={"1 / 2"} // Place this item in the first column
        >
          <UserShortCutCard src={image} gap={0} isMsg name={name}>
            <Text className="line-clamp-1" color={"text.100"} fontSize={"14px"}>
              {msg.content}
            </Text>
          </UserShortCutCard>
        </Box>

        <Box
          display={"grid"}
          flexDirection={"column"}
          justifyContent={"center"}
          gridColumn={"2 / 3"} // Place this item in the second column
        >
          <Text color={"text.100"} fontSize={"14px"}>
            {formatDateTime(msg.createdAt)}
          </Text>
        </Box>
      </Button>
    </Link>
  );
};

export default MessageBox;

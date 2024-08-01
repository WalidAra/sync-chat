import { Avatar, Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
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
        alignItems={"end"} // Center align items vertically
        py={2}
        borderBottomWidth={isBordered ? "1px" : "0px"}
        height={"auto"}
        variant={"ghost"}
        fontWeight={400}
        gap={2} // Adjust gap between items as needed
        rounded={0}
      >
        <Flex alignItems={"center"} gap={2}>
          <Avatar src={image} name={name}  />

          <Grid
            justifyItems={"start"}
            flexDir={"column"}
            w={"100%"}
            flex={"1 1 0%"}
            gap={1}
          >
            <Text as={"h2"} fontWeight={"600"}>
              {name}
            </Text>

            <Box
              w={"100%"}
              sx={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
              }}
            >
              <Text
                w={"100%"}
                fontSize={"sm"}
                color={"gray.500"}
                textAlign={"start"}
              >
                {msg.content}
              </Text>
            </Box>
          </Grid>
        </Flex>

        <Flex flexDir={"column"} justifyContent={"space-between"} h={"100%"}>
          <div></div>

          <Text color={"gray.600"} fontSize={12} fontWeight={400}>
            {formatDateTime(msg.createdAt)}
          </Text>
        </Flex>
      </Button>
    </Link>
  );
};

export default MessageBox;

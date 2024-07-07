import { Box } from "@chakra-ui/react";
import MessageCheck from "../utils/MessageCheck";

type Props = {
  isMyMsg: boolean;
};

const MessageCard = ({ isMyMsg }: Props) => {
  return (
    <Box w={"100%"} p={4}>
      <MessageCheck isMyMsg={isMyMsg} />
    </Box>
  );
};

export default MessageCard;

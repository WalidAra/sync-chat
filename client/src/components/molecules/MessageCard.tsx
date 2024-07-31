import { Box } from "@chakra-ui/react";
import MessageCheck from "../utils/MessageCheck";

type Props = {
  isMyMsg: boolean;
  name: string;
  image: string;
  content: string;
  createdAt: string;
};

const MessageCard = ({ isMyMsg , content , createdAt , image , name }: Props) => {
  return (
    <Box w={"100%"} p={4}>
      <MessageCheck content={content} createdAt={createdAt} image={image} name={name} isMyMsg={isMyMsg} />
    </Box>
  );
};

export default MessageCard;

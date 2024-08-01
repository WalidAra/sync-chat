/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from "@chakra-ui/react";
import MessageCheck from "../utils/MessageCheck";
import { motion } from "framer-motion"; // Import Framer Motion

type Props = {
  isMyMsg: boolean;
  name: string;
  image: string;
  content: string;
  createdAt: string;
  isNew?: boolean;
};

const MessageCard = ({
  isMyMsg,
  content,
  createdAt,
  image,
  name,
  isNew,
}: Props) => {
  return (
    <motion.div
      style={{ width: "100%" }}
      initial={isNew ? { opacity: 0.2 } : {}}
      animate={isNew ? { opacity: 1 } : {}}
      transition={
        isNew
          ? {
              duration: 0.5, // Quick transition
              ease: "backIn", // Custom cubic bezier for quick smooth effect
              delay: 0.5, // Delay to start the animation
            }
          : {}
      }
    >
      <Box w={"100%"} p={4}>
        <MessageCheck
          content={content}
          createdAt={createdAt}
          image={image}
          name={name}
          isMyMsg={isMyMsg}
        />
      </Box>
    </motion.div>
  );
};

export default MessageCard;

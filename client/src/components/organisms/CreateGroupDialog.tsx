/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  IconButton,
  Text,
  Box,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import { LuPenSquare } from "react-icons/lu";
import { motion } from "framer-motion";
import Footer from "./create group dialog/Footer";
import FirstSlide from "./create group dialog/FirstSlide";
import CreateGroupChatProvider, {
  useGroupChat,
} from "../../providers/CreateGroupChatProvider";
import SecondSlide from "./create group dialog/SecondSlide";

const CreateGroupDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<any>();
  const [slide, setSlide] = useState<number>(0);
  const { setSelectedUsers } = useGroupChat();

  return (
    <CreateGroupChatProvider>
      <IconButton
        onClick={onOpen}
        isRound={true}
        variant="ghost"
        colorScheme="blackAlpha"
        aria-label="Done"
        fontSize="20px"
        icon={<LuPenSquare />}
      />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>
              <Box w={"100%"}>
                <Text fontSize="lg" fontWeight="bold">
                  New group chat
                </Text>

                <Text fontSize="sm" color={"gray.600"} fontWeight={400}>
                  Invite a user to this thread. This will create a new group
                  message.
                </Text>
              </Box>
            </AlertDialogHeader>
            <AlertDialogCloseButton
              onClick={() => {
                setSelectedUsers([]);
                setSlide(0);
              }}
            />

            <AlertDialogBody p={0} display={"flex"} flexDir={"column"}>
              <Box w={"100%"} overflow={"hidden"}>
                <motion.div
                  transition={{
                    type: "tween",
                    duration: 0.6,
                    ease: "anticipate",
                  }}
                  animate={{ translateX: `-${slide * 100}%` }}
                  style={{
                    width: "100%",
                    display: "flex",
                  }}
                >
                  <FirstSlide />
                  <SecondSlide />
                </motion.div>
              </Box>
            </AlertDialogBody>

            <Footer onClose={onClose} setSlide={setSlide} slide={slide} />
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </CreateGroupChatProvider>
  );
};

export default CreateGroupDialog;

import { Box, Flex, Avatar, Input, IconButton, Button } from '@chakra-ui/react';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { LuLink, LuMic } from 'react-icons/lu';

const MessageInputBox = () => {
  return (
    <Box
      w={"100%"}
      borderTopWidth={"1px"}
      p={4}
      position={"relative"}
      bg={"transparent"}
    >
      {/* <Box position={"absolute"} w={"100%"} top={0} left={0}></Box> */}

      <Flex
        gap={2}
        flexDir={"column"}
        w={"100%"}
        bg={"background.100"}
        p={4}
        rounded={"lg"}
        shadow={"box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"}
        borderWidth={"1px"}
      >
        <Flex alignItems={"center"} gap={0}>
          <Avatar size={"sm"} />
          <Input
            size={"sm"}
            type="text"
            placeholder="Type your message..."
            sx={{
              border: "none",
              outline: "none",
              boxShadow: "none",
              _hover: {
                border: "none",
                outline: "none",
                boxShadow: "none",
              },
              _focus: {
                border: "none",
                outline: "none",
                boxShadow: "none",
              },
              _active: {
                border: "none",
                outline: "none",
                boxShadow: "none",
              },
            }}
          />
        </Flex>

        <Flex gap={3} alignItems={"center"} justifyContent={"flex-end"}>
          <Flex gap={1} alignItems={"center"}>
            <IconButton
              isRound={true}
              variant="ghost"
              colorScheme="blackAlpha"
              aria-label="Done"
              fontSize="20px"
              icon={<LuLink />}
              size={"sm"}
            />
            <IconButton
              isRound={true}
              variant="ghost"
              colorScheme="blackAlpha"
              aria-label="Done"
              fontSize="20px"
              icon={<LuMic />}
              size={"sm"}
            />
            <IconButton
              isRound={true}
              variant="ghost"
              colorScheme="blackAlpha"
              aria-label="Done"
              fontSize="20px"
              icon={<HiOutlineEmojiHappy />}
              size={"sm"}
            />
          </Flex>

          <Button
            size={"sm"}
            bg={"primary.100"}
            color={"white"}
            fontWeight={600}
          >
            Send
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default MessageInputBox
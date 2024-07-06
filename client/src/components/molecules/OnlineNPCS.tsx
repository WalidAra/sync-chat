import { Avatar, Stack } from "@chakra-ui/react";

const OnlineNPCS = () => {
  return (
    <Stack
      w={"100%"}
      direction="row"
      py={2}
      borderBottomWidth={"1px"}
      overflow={"auto"}
    >
      <Avatar name="Oshigaki Kisame" src="https://bit.ly/broken-link" />
      <Avatar name="Sasuke Uchiha" src="https://bit.ly/broken-link" />
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
      <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
    </Stack>
  );
};

export default OnlineNPCS;

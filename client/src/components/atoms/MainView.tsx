import { Box, BoxProps } from "@chakra-ui/react";

const MainView = (props: BoxProps) => {
  return (
    <Box flex={"1 1 0%"} {...props}>
      {props.children}
    </Box>
  );
};

export default MainView;

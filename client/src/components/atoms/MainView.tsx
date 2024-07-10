import { Box, BoxProps } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const MainView = (props: BoxProps) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  }, [props.children]); 

  return (
    <Box ref={boxRef} flex={"1 1 0%"} {...props}>
      {props.children}
    </Box>
  );
};

export default MainView;

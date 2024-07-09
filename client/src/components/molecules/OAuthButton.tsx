import React from "react";
import { Button, Flex, Box } from "@chakra-ui/react";

interface OAuthButtonProps {
  onClick: () => void;
  icon: React.ElementType;
  buttonText: string;
}

const OAuthButton: React.FC<OAuthButtonProps> = ({
  onClick,
  icon: IconComponent,
  buttonText,
}) => {
  return (
    <Button
      p="1px"
      position="relative"
      bg="linear-gradient(to right, #f64f59, #c471ed, #12c2e9)"
      _hover={{
        transform: "scale(1.02)",
        transition: "transform 0.2s ease-in-out",
      }}
      onClick={onClick}
      w="full"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        bg="#FFFEFF"
        w="full"
        h="full"
        borderRadius="5px"
        p="2"
      >
        <Box as={IconComponent} mr="2" />
        <Box>{buttonText}</Box>
      </Flex>
    </Button>
  );
};

export default OAuthButton;

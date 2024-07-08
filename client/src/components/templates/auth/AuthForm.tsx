import { Box, Heading, Divider, Link, Text, Grid } from "@chakra-ui/react";
import { ReactNode } from "react";
import OAuthButtons from "../../organisms/OAuthButtons";

interface AuthFormProps {
  title: string;
  footerText: string;
  footerLink: string;
  footerLinkText: string;
  children: ReactNode;
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  footerText,
  footerLink,
  footerLinkText,
  children,
}) => {
  return (
    <Grid
      bg="#1C1C24"
      color="white"
      templateColumns={{ md: "1fr", lg: "1fr 1fr" }}
      minH="100vh"
    >
      <Box position="absolute" top="4" left="4">
        <img src="" alt="Logo" />
      </Box>
      <Grid
        placeItems="center"
        bg="rgba(18, 18, 18, 0.2)"
        // backdropFilter="blur(10px)"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)"
      >
        <Box w={{ sm: "70%", lg: "60%" }}>
          <Heading mb={6} textAlign="center">
            {title}
          </Heading>
          <OAuthButtons />
          <Divider my={6} />
          {children}
        </Box>
        <Box
          position={{ md: "static", lg: "absolute" }}
          bottom="4"
          w="full"
          textAlign="center"
        >
          <Text>
            {footerText} <Link href={footerLink}>{footerLinkText}</Link>
          </Text>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthForm;

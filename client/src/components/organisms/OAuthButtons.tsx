import { Stack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import OAuthButton from "../molecules/OAuthButton";

const OAuthButtons: React.FC = () => {
  const handleGoogleLogin = () => {};

  const handleGithubLogin = () => {};

  return (
    <Stack spacing={4}>
      <OAuthButton
        onClick={handleGoogleLogin}
        icon={FcGoogle}
        buttonText="Register with Google"
      />
      <OAuthButton
        onClick={handleGithubLogin}
        icon={FaGithub}
        buttonText="Register with GitHub"
      />
    </Stack>
  );
};

export default OAuthButtons;
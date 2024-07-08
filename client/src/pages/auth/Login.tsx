import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import AuthForm from "../../components/templates/auth/AuthForm";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(8, "Password should be at least 8 characters")
    .max(20, "Password should not exceed 20 characters"),
});

const Login: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async () => {};

  return (
    <AuthForm
      title="Login"
      footerText="Don't have an account?"
      footerLink="/auth/register"
      footerLinkText="Sign up"
    >
      <form onSubmit={handleSubmit(handleLogin)}>
        <Stack spacing={4}>
          <FormControl id="email" isInvalid={!!errors.email}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" {...register("email")} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl id="password" isInvalid={!!errors.password}>
            <FormLabel>Password</FormLabel>
            <Input type="password" {...register("password")} />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
          <Button
            _hover={{
              transform: "scale(1.02)",
              transition: "transform 0.2s ease-in-out",
            }}
            type="submit"
            size="lg"
            fontSize="md"
            w="full"
          >
            Login
          </Button>
        </Stack>
      </form>
    </AuthForm>
  );
};

export default Login;

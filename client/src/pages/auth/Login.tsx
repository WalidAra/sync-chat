import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  FormErrorMessage,
  Spinner,
} from "@chakra-ui/react";
import AuthForm from "../../components/templates/auth/AuthForm";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

const schema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(8, "Password should be at least 8 characters")
    .max(20, "Password should not exceed 20 characters"),
});

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

  const handleLogin = async (data: { email: string; password: string }) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:2000/api/auth/public/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Login successful:", result);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

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
          {error && <div style={{ color: "red" }}>{error}</div>}
          <Button
            _hover={{
              transform: "scale(1.02)",
              transition: "transform 0.2s ease-in-out",
            }}
            bg="black"
            color="white"
            type="submit"
            size="lg"
            fontSize="md"
            w="full"
            isLoading={isLoading}
          >
            {isLoading ? <Spinner size="sm" /> : "Login"}
          </Button>
        </Stack>
      </form>
    </AuthForm>
  );
};

export default Login;

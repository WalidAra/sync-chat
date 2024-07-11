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
import { FetchResponse } from "../../types";

const schema = z
  .object({
    name: z
      .string()
      .min(4, "Username should be at least 4 characters")
      .max(20, "Username should not exceed 20 characters"),
    email: z.string().email("Invalid email format"),
    password: z
      .string()
      .min(8, "Password should be at least 8 characters")
      .max(20, "Password should not exceed 20 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password should be at least 8 characters")
      .max(20, "Password should not exceed 20 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const Register: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleRegister = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:2000/api/auth/public/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result: FetchResponse = await response.json();

      if (!response.ok) {
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
      title="Register"
      footerText="Already have an account?"
      footerLink="/auth/login"
      footerLinkText="Sign in"
    >
      <form onSubmit={handleSubmit(handleRegister)}>
        <Stack spacing={4}>
          <FormControl id="name" isInvalid={!!errors.name}>
            <FormLabel>Username</FormLabel>
            <Input type="text" {...register("name")} />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>
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
          <FormControl
            id="confirmPassword"
            isInvalid={!!errors.confirmPassword}
          >
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" {...register("confirmPassword")} />
            <FormErrorMessage>
              {errors.confirmPassword?.message}
            </FormErrorMessage>
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
            {isLoading ? <Spinner size="sm" /> : "Register"}
          </Button>
        </Stack>
      </form>
    </AuthForm>
  );
};

export default Register;

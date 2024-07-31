/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

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
import { useFetch } from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { setProfile } from "../../features/state_management/slices/user.slice";
import { Client } from "../../types";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";

const schema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(6, "Password should be at least 6 characters")
    .max(20, "Password should not exceed 20 characters"),
});

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useNavigate();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const {setToken} = useAuth();

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

    // fetch , if response is ok them log result else set error ,

    try {
      const response = await useFetch({
        feature: "/auth",
        method: "POST",
        body: {
          ...data,
          recall: isChecked,
        },
        endPoint: "/login",
        token: null,
      });

      console.log('====================================');
      console.log(response);
      console.log('====================================');

      if (response.status === true) {
        const { token, ...userData } = response.data;
        localStorage.setItem("sync-token", token);
        setToken(token);
        router("/");
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
          <Checkbox
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
          >
            Remember me for 30 days
          </Checkbox>
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

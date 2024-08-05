import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import GoogleIcon from "@/components/atoms/icons/GoogleIcon";
import GithubIcon from "@/components/atoms/icons/GithubIcon";
import Logo from "@/components/atoms/Logo";
import { Checkbox } from "native-base";

type Props = {
  children: React.ReactNode;
  isLogin?: boolean;
};

const FormLayout = ({ children, isLogin = true }: Props) => {
  return (
    <SafeAreaView className="w-full flex-1 px-7 bg-background flex flex-col justify-center items-center gap-y-4">
      <Logo size={60} />
      <View className="gap-0">
        <Text className="text-3xl text-center font-bold tracking-tight text-foreground">
          {isLogin ? "Sign in to your account" : "Create a new account"}
        </Text>
      </View>

      <View className="flex flex-col w-full gap-y-3">
        <TouchableOpacity
          activeOpacity={0.6}
          className="w-full flex flex-row justify-center  border border-border py-3 px-4 rounded-md"
        >
          <GoogleIcon size={25} />
          <Text className="text-sm ml-2 font-medium text-center">
            {isLogin ? "Sign in with Google" : "Sign up with Google"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          className="w-full flex flex-row justify-center  border border-border py-3 px-4 rounded-md"
        >
          <GithubIcon size={25} />
          <Text className="text-sm ml-2 font-medium text-center">
            {isLogin ? "Sign in with Github" : "Sign up with Github"}
          </Text>
        </TouchableOpacity>
      </View>

      <View className="relative w-full flex flex-row justify-center items-center">
        <View className="flex-1  border-b border-muted"></View>
        <Text className="px-2 text-sm font-medium text-mutedForeground">
          OR CONTINUE WITH
        </Text>
        <View className="flex-1 border-b border-muted "></View>
      </View>
      {children}
      <View className="w-full">
        <Checkbox
          className="flex flex-row justify-start"
          isChecked
          value={""}
          colorScheme={"gray"}
        >
          <Text className="font-medium text-mutedForeground">
            Remember me for 30 days
          </Text>
        </Checkbox>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        className="w-full flex flex-row justify-center  bg-primary py-3 px-4 rounded-md"
      >
        <Text className="text-sm ml-2 text-white font-medium text-center">
          Sign in
        </Text>
      </TouchableOpacity>
      <Text className="mt-2 text-mutedForeground text-center font-medium">
        {isLogin ? (
          <>
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-primary">
              <Text className="text-foreground underline ">Sign up</Text>
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href="/sign-in" className="text-primary">
              <Text className="text-foreground underline"> Sign in</Text>
            </Link>
          </>
        )}
      </Text>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default FormLayout;

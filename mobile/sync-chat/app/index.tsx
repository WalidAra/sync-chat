import { Text, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";

const App = () => {
  return (
    <SafeAreaView className="flex bg-background flex-1 items-center justify-center w-full ">
      <Link href={"/home"}>
        <Text className="text-blue-500 text-2xl">Hello World</Text>
      </Link>
    </SafeAreaView>
  );
};

export default App;

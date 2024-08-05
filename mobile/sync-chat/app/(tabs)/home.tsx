import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import OnlineNPCS from "@/components/pages/core/home/OnlineNPCS";
import ChatPanel from "@/components/pages/core/home/ChatPanel";

const Home = () => {
  return (
    <SafeAreaView className="w-full  flex-1 bg-background">
      <ScrollView className="w-full flex-1 p-7 flex flex-col bg-background">
        <OnlineNPCS />
        <ChatPanel />
      </ScrollView>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default Home;

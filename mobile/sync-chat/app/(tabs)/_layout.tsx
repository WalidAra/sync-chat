import React from "react";
import { Tabs } from "expo-router";
import MessageIcon from "@/components/atoms/icons/MessageIcon";
import PhoneIcon from "@/components/atoms/icons/phoneIcon";
import { View } from "react-native";
import GradientBackground from "@/components/atoms/GradientBackground";
import { Avatar } from "native-base";

const HomeLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 60,
          paddingVertical: 2,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "white",
          borderWidth: 1,
          elevation: 0,
          padding: 10,
          position: "absolute",
          borderColor: "#e8e8e8",
        },
        tabBarShowLabel: false,
      }}
      initialRouteName="home"
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            console.log(focused);

            return (
              <View className="h-full pb-1 relative  w-10 flex items-center justify-between">
                <View></View>
                <MessageIcon size={27} color={color} />

                <View
                  className={`h-1.5 rounded ${
                    focused ? "bg-blue-500" : "bg-transparent"
                  } w-full`}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="calls"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className="h-full pb-1 relative  w-10 flex items-center justify-between">
              <View></View>
              <PhoneIcon size={30} color={color} />

              <View
                className={`h-1.5 rounded ${
                  focused ? "bg-blue-500" : "bg-transparent"
                } w-full`}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className="h-full pb-1 relative  w-10 flex items-center justify-between">
              <View></View>
              <View className="p-[3px] flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full ">
                <GradientBackground>
                  <Avatar
                    size={"sm"}
                    source={{
                      uri: "https://i.pinimg.com/564x/a4/a2/00/a4a2000895b290e77c872c7b7acb6fa9.jpg",
                    }}
                  ></Avatar>
                </GradientBackground>
              </View>

              <View
                className={`h-1.5 rounded ${
                  focused ? "bg-blue-500" : "bg-transparent"
                } w-full`}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;

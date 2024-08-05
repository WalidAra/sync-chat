import { View, FlatList } from "react-native";
import React from "react";
import { Avatar } from "native-base";import GradientBackground from "@/components/atoms/GradientBackground";

const OnlineNPCS = () => {
  const array = [
    {
      id: 1,
      name: "walid ara",
      image:
        "https://i.pinimg.com/564x/63/67/0c/63670c873dbe5ade662168322cde1dbf.jpg",
    },
    {
      id: 2,
      name: "walid ara",
      image:
        "https://i.pinimg.com/564x/63/67/0c/63670c873dbe5ade662168322cde1dbf.jpg",
    },
    {
      id: 3,
      name: "walid ara",
      image:
        "https://i.pinimg.com/564x/63/67/0c/63670c873dbe5ade662168322cde1dbf.jpg",
    },
  ];
  return (
    <View className="w-full relative mt-4 ">
      <FlatList
        contentContainerStyle={{ columnGap: 8 }}
        horizontal
        data={array}
        renderItem={({ index, item: { id, image, name }, separators }) => {
          return (
            <View
              key={id}
              className="p-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full "
            >
              <GradientBackground>
                <Avatar
                  source={{
                    uri: image,
                  }}
                ></Avatar>
              </GradientBackground>
            </View>
          );
        }}
      />
    </View>
  );
};

export default OnlineNPCS;

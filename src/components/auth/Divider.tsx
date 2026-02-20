import React from "react";
import { Text, View } from "react-native";

export default function Divider() {
  return (
    <View className="flex-row items-center mt-[3%] px-[4%]">
      <View className="flex-1 h-px bg-secondaryColor" />
      <Text
        className="mx-4 text-secondaryColor text-sm"
        style={{ fontFamily: "SF-Pro-Regular" }}
      >
        Or
      </Text>
      <View className="flex-1 h-px bg-secondaryColor" />
    </View>
  );
}

import React from "react";
import { Pressable, Text, View } from "react-native";

export default function ForgotPassword() {
  return (
    <Pressable onPress={() => {}}>
      <View className="items-end mb-[2%]">
        <Text className="font-SF_Pro_Regular text-sm text-[#FF3B3B]">
          Forgot Password?
        </Text>
      </View>
    </Pressable>
  );
}

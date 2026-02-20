import React from "react";
import { Text, View } from "react-native";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <View className="mt-[3%] justify-center items-center">
      <Text className="font-SF_Pro_Bold text-3xl text-neutralDark">
        {title || "Log in to Account"}
      </Text>
      <Text className="font-SF_Pro_Regular text-2xl text-secondaryColor mt-2">
        {subtitle || "Hey there! Let’s get you back in"}
      </Text>
    </View>
  );
}

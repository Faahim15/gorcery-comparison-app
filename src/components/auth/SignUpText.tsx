import React from "react";
import { Pressable, Text, View } from "react-native";

interface SignUpTextProps {
  title?: string;
  subtitle?: string;
  onPress?: () => void;
}

export default function SignUpText({
  title,
  subtitle,
  onPress,
}: SignUpTextProps) {
  return (
    <View className="flex-row justify-center items-center mt-[3%] ">
      <Text className="font-SF_Pro_Regular text-base text-secondaryColor ">
        {title || "Don't have an account?"}{" "}
      </Text>
      <Pressable onPress={onPress} className="items-center">
        <Text className="text-primaryColor text-base font-SF_Pro_SemiBold ">
          {subtitle || "Sign Up"}
        </Text>
      </Pressable>
    </View>
  );
}

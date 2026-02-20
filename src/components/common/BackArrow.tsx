import { arrowStyles } from "@/src/constants/styles";
import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { Pressable, View } from "react-native";
export default function BackArrow() {
  return (
    <Pressable onPress={() => router.back()}>
      <View
        style={arrowStyles}
        className="justify-center items-center shadow-md"
      >
        <ArrowLeft size={24} color="black" />
      </View>
    </Pressable>
  );
}

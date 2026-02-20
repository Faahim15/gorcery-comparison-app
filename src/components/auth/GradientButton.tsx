import { scale, verticalScale } from "@/src/utils/Scaling";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

interface GradientButtonProps {
  title: string;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export default function GradientButton({
  title,
  onPress,
  loading = false,
  disabled = false,
}: GradientButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      disabled={disabled || loading}
      style={{
        borderRadius: 16,
        overflow: "hidden",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      <LinearGradient
        colors={["#00C47A", "#00D68F"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          height: verticalScale(48),
          alignItems: "center",
          justifyContent: "center",
          borderRadius: scale(16),
        }}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text
            style={{
              fontFamily: "SF-Pro-SemiBold",
              fontSize: 17,
              color: "#fff",
            }}
          >
            {title}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

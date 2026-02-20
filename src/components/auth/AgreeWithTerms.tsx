import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Linking, Pressable, Text, View } from "react-native";

type AgreeWithTermsProps = {
  agreed: boolean;
  onToggle: () => void;
};

export default function AgreeWithTerms({
  agreed,
  onToggle,
}: AgreeWithTermsProps) {
  // functions to open URLs
  const openTerms = () => {
    Linking.openURL("https://www.rakibapp.com/terms.html");
  };

  const openPrivacy = () => {
    Linking.openURL("https://www.rakibapp.com/privacy-policy.html");
  };

  return (
    <View className="mt-[2%] mb-1 flex-row items-center">
      <Pressable onPress={onToggle} className="mr-3 ">
        <Ionicons
          name={agreed ? "checkbox" : "square-outline"}
          size={18}
          color={agreed ? "#00C47A" : "#9CA3AF"} // blue / gray
        />
      </Pressable>

      <Text className="flex-1 text-xs font-poppins text-gray-900 ">
        Agree with{" "}
        <Text
          className="font-SF_Pro_SemiBold text-primaryColor"
          onPress={openTerms}
        >
          Terms and Conditions{" "}
        </Text>
        and{" "}
        <Text
          className="font-SF_Pro_SemiBold text-primaryColor"
          onPress={openPrivacy}
        >
          Privacy Policy
        </Text>
        .
      </Text>
    </View>
  );
}

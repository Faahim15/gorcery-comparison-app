import Divider from "@/src/components/auth/Divider";
import ForgotPassword from "@/src/components/auth/ForgotPassword";
import GradientButton from "@/src/components/auth/GradientButton";
import Header from "@/src/components/auth/Header";
import SignUpText from "@/src/components/auth/SignUpText";
import CustomInput from "@/src/components/common/CustomInput";
import CustomStatusBar from "@/src/utils/CustomStatusBar";
import { router } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";

export default function LoginScreen() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
    <View className="flex-1 px-[5%] pt-[20%] bg-white">
      <CustomStatusBar backgroundColor="#ffffff" barStyle="dark-content" />

      <Header />
      <View className="mt-[10%] ">
        <CustomInput
          label="Email"
          textInputConfig={{
            placeholder: "Enter your email address",
            keyboardType: "email-address",
            autoCapitalize: "none",
            value: formData.email,
            onChangeText: (text) => handleChange("email", text),
          }}
        />
        <CustomInput
          label="Password"
          textInputConfig={{
            placeholder: "Enter your password",
            secureTextEntry: true,
            value: formData.password,
            onChangeText: (text) => handleChange("password", text),
          }}
        />
        <ForgotPassword />
      </View>
      <GradientButton onPress={() => {}} title="Log In" />
      <SignUpText
        title="Don't have an account?"
        subtitle="Sign Up"
        onPress={() => router.push("/auth/create-account")}
      />
      <Divider />
    </View>
  );
}

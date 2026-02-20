import AgreeWithTerms from "@/src/components/auth/AgreeWithTerms";
import GradientButton from "@/src/components/auth/GradientButton";
import Header from "@/src/components/auth/Header";
import SignUpText from "@/src/components/auth/SignUpText";
import BackArrow from "@/src/components/common/BackArrow";
import CustomInput from "@/src/components/common/CustomInput";
import CustomStatusBar from "@/src/utils/CustomStatusBar";
import { router } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
export default function CreateAccountScreen() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [agreed, setAgreed] = useState(false);
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
    <View className="flex-1 px-[5%] pt-[2%] bg-white">
      <CustomStatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <BackArrow />
      <Header
        title="Create Account"
        subtitle="Join us and get started — it’s quicker than you think."
      />
      <View className="mt-[10%] ">
        <CustomInput
          label="Full Name"
          textInputConfig={{
            placeholder: "Enter your full name",
            autoCapitalize: "words",
            value: formData.fullName,
            onChangeText: (text) => handleChange("fullName", text),
          }}
        />
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
        <CustomInput
          label="Confirm Password"
          textInputConfig={{
            placeholder: "Confirm your password",
            secureTextEntry: true,
            value: formData.confirmPassword,
            onChangeText: (text) => handleChange("confirmPassword", text),
          }}
        />
        <AgreeWithTerms
          agreed={agreed}
          onToggle={() => setAgreed((prev) => !prev)}
        />
      </View>
      <View className="mt-[1%]">
        <GradientButton onPress={() => {}} title="Create Account" />
      </View>
      <SignUpText
        title="Already have an account?"
        subtitle="Log In"
        onPress={() => router.push("/auth/log-in")}
      />
    </View>
  );
}

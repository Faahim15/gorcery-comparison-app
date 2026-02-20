import "@/global.css";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "SF-Pro-Bold": require("../assets/fonts/SF-Pro-Display-Bold.otf"),
    "SF-Pro-SemiBold": require("../assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SF-Pro-Medium": require("../assets/fonts/SF-Pro-Display-Medium.otf"),
    "SF-Pro-Regular": require("../assets/fonts/SF-Pro-Display-Regular.otf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}

import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Login" }} />
      <Stack.Screen name="register" options={{ title: "Sign Up" }} />
      <Stack.Screen name="(tabs)/one" options={{ title: "Home" }} />
    </Stack>
  );
};

export default Layout;

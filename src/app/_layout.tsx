import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext";

const Layout = () => {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
};

export default Layout;

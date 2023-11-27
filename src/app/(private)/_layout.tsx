import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="one" options={{ title: "Home" }} />
      <Tabs.Screen name="two" options={{ title: "Profile" }} />
    </Tabs>
  );
};

export default Layout;

import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;

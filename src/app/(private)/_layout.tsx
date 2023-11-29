import { Tabs } from "expo-router";
//Context
import { useTheme } from "../../context/ThemeContext";
//Icons
import { Feather } from "@expo/vector-icons";

const Layout = () => {
  const { theme } = useTheme();
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.logoBlue,
          tabBarInactiveTintColor: theme.primary,
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="grid" color={color} size={size} />
          ),
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.logoBlue,
          tabBarInactiveTintColor: theme.primary,
        }}
      />
      <Tabs.Screen
        name="apply"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="edit" color={color} size={size} />
          ),
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.logoBlue,
          tabBarInactiveTintColor: theme.primary,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.logoBlue,
          tabBarInactiveTintColor: theme.primary,
        }}
      />
    </Tabs>
  );
};

export default Layout;

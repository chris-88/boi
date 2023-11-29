import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
// Icons
import { Feather } from "@expo/vector-icons";
// Context
import { useTheme } from "../context/ThemeContext";

const categories = [
  {
    name: "Accounts",
    icon: "inbox",
  },
  {
    name: "Cards",
    icon: "credit-card",
  },
  {
    name: "Payments",
    icon: "upload",
  },
];

const BOI_NavBar = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  const handleCategoryPress = (name: string) => {
    setSelectedCategory(name);
    // Add logic to navigate or perform actions based on the selected category
    console.log(`Selected category: ${name}`);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.primary }]}>
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleCategoryPress(item.name)}
          style={[
            styles.categoryButton,
            {
              borderBottomColor:
                selectedCategory === item.name
                  ? theme.secondary
                  : "transparent",
            },
          ]}
        >
          <Feather
            name={item.icon as any}
            size={24}
            color={theme.text}
            style={{ paddingHorizontal: 20 }}
          />
          <Text style={{ color: theme.text }}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  categoryButton: {
    alignItems: "center",
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
});

export default BOI_NavBar;

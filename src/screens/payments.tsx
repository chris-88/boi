import { View, Text, StyleSheet } from "react-native";
//Context
import { useTheme } from "../context/ThemeContext";

const PaymentsScreen = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text>This is the Payments page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PaymentsScreen;

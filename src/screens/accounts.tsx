import { View, Text, StyleSheet } from "react-native";
//Context
import { useTheme } from "../context/ThemeContext";
import BOI_AccountList from "../components/BOI_AccountList";

const AccountScreen = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <BOI_AccountList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default AccountScreen;

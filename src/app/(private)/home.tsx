import { View, Text, StyleSheet } from "react-native";
//Context
import { useTheme } from "../../context/ThemeContext";
//Components
import BOI_Header from "../../components/BOI_Header";
import BOI_TopBarNav from "../../components/BOI_TopBarNav";

const Page = () => {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <BOI_Header title="Home" />
      <BOI_TopBarNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Page;

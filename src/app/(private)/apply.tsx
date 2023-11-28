import { View, Text, StyleSheet } from "react-native";
//Context
import { useTheme } from "../../context/ThemeContext";
import BOI_Header from "../../components/BOI_Header";

const Page = () => {
  const { theme } = useTheme();

  return (
    <>
      <BOI_Header title="Apply" />
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text>This is the Apply page</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Page;

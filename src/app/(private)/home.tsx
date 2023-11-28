import { View, Text, StyleSheet } from "react-native";
//Context
import { useTheme } from "../../context/ThemeContext";
import BOI_Header from "../../components/BOI_Header";
import BOI_TopBarNav from "../../components/BOI_TopBarNav";

const Page = () => {
  const { theme } = useTheme();

  return (
    <>
      <BOI_Header title="Home" />
      <BOI_TopBarNav />
      {/* <View style={[styles.container, { backgroundColor: theme.error }]}>
        <Text>This is the Home page</Text>
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default Page;

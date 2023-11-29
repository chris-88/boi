import { View, Text, StyleSheet } from "react-native";
//Context
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
//Components
import BOI_Button from "../../components/BOI_Button";
import BOI_Header from "../../components/BOI_Header";

const Page = () => {
  const { theme } = useTheme();
  const { onLogout } = useAuth();

  return (
    <>
      <BOI_Header title="Services" />
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text>This is the Services page</Text>
        <Text>This will be used for the CMS POC</Text>
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

import { View, Text, StyleSheet } from "react-native";
//Context
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
//Components
import BOI_Header from "../../components/BOI_Header";
import BOI_GetContent from "../../components/BOI_GetContent";

const Page = () => {
  const { theme } = useTheme();
  const { onLogout } = useAuth();

  return (
    <>
      <BOI_Header title="Services" />
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <BOI_GetContent contentId="cms-test" />
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

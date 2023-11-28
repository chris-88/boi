import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
// Context
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
//Components
import BOI_Button from "../../components/BOI_Button";

const Page: React.FC = () => {
  const { theme } = useTheme();
  const { onLogin } = useAuth();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <BOI_Button title="Login" onPress={onLogin} />
      <Link href="/(public)/register" asChild>
        <BOI_Button title="Register" />
      </Link>
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

export default Page;

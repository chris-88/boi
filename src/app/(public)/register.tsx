import { View, Text, StyleSheet } from "react-native";
//Context
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
//Components
import BOI_Button from "../../components/BOI_Button";

const Register = () => {
  const { theme } = useTheme();
  const { onLogin } = useAuth();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text>Registration Page</Text>
      <BOI_Button title="Registered" onPress={onLogin} />
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

export default Register;

import { Button, Text, View } from "react-native";
import { Link } from "expo-router";
import { useAuth } from "../../context/AuthContext";

const Page = () => {
  const { onLogin } = useAuth();

  return (
    <View>
      <Text>Login Page</Text>
      <Button title="Login" onPress={onLogin} />
      <Link href="/(public)/register" asChild>
        <Button title="Register" />
      </Link>
    </View>
  );
};

export default Page;

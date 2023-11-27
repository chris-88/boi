import { Button } from "react-native";
import { Link } from "expo-router";
import { useAuth } from "../../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  const { onLogin } = useAuth();

  return (
    <SafeAreaView>
      <Button title="Login" onPress={onLogin} />
      <Link href="/(public)/register" asChild>
        <Button title="Register" />
      </Link>
    </SafeAreaView>
  );
};

export default Page;

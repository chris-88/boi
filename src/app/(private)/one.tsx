import { View, Text, Button } from "react-native";
import { useAuth } from "../../context/AuthContext";

const Page = () => {
  const { onLogout } = useAuth();
  return (
    <View>
      <Text>This is the home page</Text>
      <Button title="Log Out" onPress={onLogout} />
    </View>
  );
};

export default Page;

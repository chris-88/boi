import { View, Text } from "react-native";
//Components
import BOI_Header from "../../components/BOI_Header";
import BOI_TopBarNav from "../../components/BOI_TopBarNav";
import BOI_NavBar from "../../components/BOI_NavBar";

const Page = () => {
  return (
    <View style={{ flex: 0 }}>
      <BOI_Header title="Home" />
      {/* <BOI_TopBarNav /> */}
      <BOI_NavBar />
      <Text>This is the Home page</Text>
    </View>
  );
};

export default Page;

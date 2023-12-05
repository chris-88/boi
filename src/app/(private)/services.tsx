import { View, StyleSheet } from "react-native";
//Context
import { useTheme } from "../../context/ThemeContext";
//Components
import BOI_Header from "../../components/BOI_Header";
import BOI_GetContent from "../../components/BOI_GetContent";
import WebView from "react-native-webview";

const Page = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <BOI_Header title="Services" />
      {/* <BOI_GetContent contentId="cms-test" /> */}
      <WebView source={{ uri: "http://localhost:3000/" }} style={{ flex: 1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Page;

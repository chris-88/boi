import { View, Text, StyleSheet } from "react-native";
import WebView from "react-native-webview";
// Context
import { useTheme } from "../../context/ThemeContext";
// Components
import BOI_Header from "../../components/BOI_Header";

const Page = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <BOI_Header title="Apply" />
      <WebView
        source={{ uri: "https://project-neptune-staging.bsw-dev.net/" }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Page;

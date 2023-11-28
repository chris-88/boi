import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
//Icons
import { Feather } from "@expo/vector-icons";

interface BOI_TopBarNavProps {
  initialIndex?: number;
}

const AccountScreen = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text>This is the Accounts page</Text>
  </View>
);

const CardsScreen = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text>This is the Cards page</Text>
  </View>
);

const PaymentsScreen = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text>This is the Payments page</Text>
  </View>
);

const BOI_TopBarNav: React.FC<BOI_TopBarNavProps> = ({ initialIndex = 0 }) => {
  const [index, setIndex] = useState(initialIndex);
  const [routes] = useState([
    { key: "account", title: "Account", icon: "inbox" },
    { key: "cards", title: "Cards", icon: "credit-card" },
    { key: "payments", title: "Payments", icon: "upload" },
  ]);

  const renderScene = SceneMap({
    account: AccountScreen,
    cards: CardsScreen,
    payments: PaymentsScreen,
  });

  interface Route {
    key: string;
    title: string;
    icon: string;
  }

  interface RenderIconProps {
    route: Route;
  }

  const renderIcon = ({ route }: RenderIconProps) => (
    <Feather name={route.icon as any} size={24} color="#DCDCDC" />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: 100 }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          renderIcon={renderIcon}
          style={styles.tabBar}
          indicatorStyle={styles.indicator}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff", // Set your desired background color
    elevation: 0, // Remove shadow on Android
    shadowOpacity: 0, // Remove shadow on iOS
  },
  indicator: {
    backgroundColor: "#0000FF", // Set your desired indicator color
  },
});

export default BOI_TopBarNav;

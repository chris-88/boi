import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
//Icons
import { Feather } from "@expo/vector-icons";
//Screens
import { Screens } from "../screens";
const Account = () => <Screens.Account />;
const Cards = () => <Screens.Cards />;
const Payments = () => <Screens.Payments />;

interface BOI_TopBarNavProps {
  initialIndex?: number;
}

const BOI_TopBarNav: React.FC<BOI_TopBarNavProps> = ({ initialIndex = 0 }) => {
  const [index, setIndex] = useState(initialIndex);
  const [routes] = useState([
    { key: "account", title: "Account", icon: "inbox" },
    { key: "cards", title: "Cards", icon: "credit-card" },
    { key: "payments", title: "Payments", icon: "upload" },
  ]);

  const renderScene = SceneMap({
    account: Account,
    cards: Cards,
    payments: Payments,
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

import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TabView, SceneMap, TabBar, Route } from "react-native-tab-view";
// Context
import { useTheme } from "../context/ThemeContext";
// Icons
import { Feather } from "@expo/vector-icons";
// Screens
import { Screens } from "../screens";

const Account = () => <Screens.Account />;
const Cards = () => <Screens.Cards />;
const Payments = () => <Screens.Payments />;

interface BOI_TopBarNavProps {
  initialIndex?: number;
}

const BOI_TopBarNav: React.FC<BOI_TopBarNavProps> = ({ initialIndex = 0 }) => {
  const { theme } = useTheme();
  const [index, setIndex] = useState(initialIndex);
  const [routes] = useState<Route[]>([
    { key: "account", title: "Account", icon: "inbox" },
    { key: "cards", title: "Cards", icon: "credit-card" },
    { key: "payments", title: "Payments", icon: "upload" },
  ]);

  const renderScene = SceneMap({
    account: Account,
    cards: Cards,
    payments: Payments,
  });

  const renderIcon = ({
    route,
    focused,
  }: {
    route: Route;
    focused: boolean;
  }) => (
    <Feather
      name={route.icon as any}
      size={24}
      color={focused ? theme.logoBlue : theme.primary}
    />
  );

  const CustomTabBar = (props: any) => (
    <TabBar
      {...props}
      renderLabel={() => null} // Hides the title
      renderIcon={renderIcon}
      style={[styles.tabBar, { backgroundColor: theme.background }]}
      indicatorStyle={{ backgroundColor: theme.logoBlue }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: 100 }}
      renderTabBar={CustomTabBar}
    />
  );
};

const styles = StyleSheet.create({
  tabBar: {
    elevation: 0,
    shadowOpacity: 0,
  },
});

export default BOI_TopBarNav;

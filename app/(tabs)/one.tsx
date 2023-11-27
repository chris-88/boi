import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View>
      <Text>Tabs Page One</Text>
      <Link href="/" replace asChild>
        <Button title="Log Out" />
      </Link>
    </View>
  );
};

export default Page;

import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const Page = () => {
  return (
    <View>
      <Link href="/(private)/one" replace asChild>
        <Button title="Log In" />
      </Link>
      <Link href="/register" asChild>
        <Button title="Register" />
      </Link>
    </View>
  );
};

export default Page;

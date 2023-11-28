import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { Feather } from "@expo/vector-icons";
//Context
import { useTheme } from "../context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
// import ModalScreen from './ModalScreen'; // Replace with your actual ModalScreen component

interface BOI_HeaderProps {
  title: string;
}

const BOI_Header: React.FC<BOI_HeaderProps> = ({ title }) => {
  const { theme } = useTheme();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
      <TouchableOpacity onPress={toggleModal}>
        <Feather name="help-circle" size={24} color="black" />
      </TouchableOpacity>
      {/* TODO: Replace with your actual ModalScreen component */}
      {/* <Modal isVisible={isModalVisible} onRequestClose={toggleModal}>
        <ModalScreen closeModal={toggleModal} />
      </Modal> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: -25,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
  },
});

export default BOI_Header;

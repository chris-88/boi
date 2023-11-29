import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
//Context
import { useTheme } from "../context/ThemeContext";

interface BOI_SelectAccountProps {
  accountName: string;
  balance: number;
  ibanLastFourDigits: string;
}

const BOI_SelectAccount: React.FC<BOI_SelectAccountProps> = ({
  accountName,
  balance,
  ibanLastFourDigits,
}) => {
  const { theme } = useTheme();

  const [isModalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
    // TODO -  Implement logic to fetch and display transactions based on the selected account
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: "#fff", borderColor: theme.primary },
        ]}
        onPress={handlePress}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ color: theme.adBlue, fontSize: 20 }}>
              {accountName}
            </Text>
            <Text style={{ color: "grey" }}>~{ibanLastFourDigits}</Text>
          </View>
          <Text
            style={{ color: theme.logoBlue, fontSize: 28, fontWeight: "300" }}
          >
            € {balance}
          </Text>
        </View>
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="slide">
        {/* Implement your transaction list component here */}
        {/* Pass the accountName as a prop to display at the top of the modal */}
        <View style={styles.modalContent}>
          <Text>{accountName}</Text>
          {/* Implement the transaction list */}
          {/* You can create a separate component for the transaction list */}
          {/* Remember to pass the necessary data to this component */}
        </View>

        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
          <Text>Close</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    marginBottom: 16,
    marginHorizontal: 4,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  modalContent: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    padding: 16,
    backgroundColor: "#ccc",
    alignItems: "center",
  },
});

export default BOI_SelectAccount;

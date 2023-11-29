import { FlatList, View } from "react-native";
import BOI_SelectAccount from "../components/BOI_SelectAccount";
import { accountData } from "../data/accountData";

interface Account {
  accountName: string;
  balance: number;
  ibanLastFourDigits: string;
}

const AccountList = () => {
  const renderAccountItem = ({ item }: { item: Account }) => (
    <BOI_SelectAccount
      accountName={item.accountName}
      balance={item.balance}
      ibanLastFourDigits={item.ibanLastFourDigits}
    />
  );

  return (
    <View>
      <FlatList
        data={accountData}
        renderItem={renderAccountItem}
        keyExtractor={(item) => item.accountName}
      />
    </View>
  );
};

export default AccountList;

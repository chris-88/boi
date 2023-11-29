// screens/index.tsx

// Import all screen components
import AccountScreen from "./accounts";
import CardsScreen from "./cards";
import PaymentsScreen from "./payments";

// Export the screen components
export { AccountScreen, CardsScreen, PaymentsScreen };

// You can also export them as an object for easy import
export const Screens = {
  Account: AccountScreen,
  Cards: CardsScreen,
  Payments: PaymentsScreen,
};

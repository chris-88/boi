import React, { createContext, useContext, useState, ReactNode } from "react";
import DarkTheme from "../constants/darkTheme";
import LightTheme from "../constants/lightTheme";
import SeasonalTheme from "../constants/seasonalTheme";

type ThemeType = "dark" | "light" | "seasonal";
type Theme = typeof DarkTheme | typeof LightTheme | typeof SeasonalTheme;

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeType, setThemeType] = useState<ThemeType>("light");

  const toggleTheme = () => {
    setThemeType((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const theme: Theme = themeType === "dark" ? DarkTheme : LightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

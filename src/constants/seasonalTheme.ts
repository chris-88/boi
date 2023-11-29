export type SeasonalTheme = {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  heading: string;
  border: string;
  accent: string;
  error: string;
  success: string;
  warning: string;
  logoBlue: string;
  darkBlue: string;
  lightGray: string;
  adBlue: string;
  highligherGreen: string;
  buttonText: string;
};

const seasonalTheme: SeasonalTheme = {
  primary: "#ff6347",
  secondary: "#87ceeb",
  background: "#f5f5f5",
  text: "#333333",
  heading: "#000000",
  border: "#dddddd",
  accent: "#e74c3c",
  error: "#e74c3c",
  success: "#2ecc71",
  warning: "#f39c12",
  darkBlue: "#000066", // Header ribbon dark blue
  lightGray: "#EFEFEF", // Header ribbon light gray
  logoBlue: "#0000FF", // Logo blue
  adBlue: "#00007C", // Ad blue
  highligherGreen: "#00FFC5", // Highlighter green
  buttonText: "#FFFFFF", // Button text
};

export default seasonalTheme;

export type DarkTheme = {
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

const darkTheme: DarkTheme = {
  primary: "#3498db",
  secondary: "#2ecc71",
  background: "#2c3e50",
  text: "#ecf0f1",
  heading: "#ffffff",
  border: "#34495e",
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

export default darkTheme;

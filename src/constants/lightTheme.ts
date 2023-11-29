export type LightTheme = {
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
  darkBlue: string;
  lightGray: string;
  logoBlue: string;
  adBlue: string;
  highligherGreen: string;
  buttonText: string;
};

const lightTheme: LightTheme = {
  primary: "#DCDCDC",
  secondary: "#00ffc6",
  background: "#ffffff",
  text: "#161616",
  heading: "#000066",
  border: "#DDDDDD",
  accent: "#0000FF",
  error: "#D32F2F",
  success: "#4CAF50",
  warning: "#FFC107",
  darkBlue: "#000066", // Header ribbon dark blue
  lightGray: "#EFEFEF", // Header ribbon light gray
  logoBlue: "#0000FF", // Logo blue
  adBlue: "#00007C", // Ad blue
  highligherGreen: "#00FFC5", // Highlighter green
  buttonText: "#FFFFFF", // Button text
};

export default lightTheme;

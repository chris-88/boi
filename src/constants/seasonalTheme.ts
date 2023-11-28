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
  logoBlue: "#0000FF", // Logo blue
};

export default seasonalTheme;

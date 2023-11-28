import React, { forwardRef } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { useTheme } from "../context/ThemeContext";

interface BOI_ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress?: () => void;
}

const BOI_Button: React.ForwardRefRenderFunction<
  TouchableOpacity,
  BOI_ButtonProps
> = ({ title, style, onPress, ...props }, ref) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      ref={ref}
      style={[styles.button, { backgroundColor: theme.logoBlue }, style]}
      onPress={onPress}
      {...props}
    >
      <Text style={[styles.buttonText, { color: theme.primary }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    maxWidth: 320,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default forwardRef(BOI_Button);

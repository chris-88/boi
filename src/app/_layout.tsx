import { useEffect } from "react";
import { Slot, useRouter } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { ThemeProvider } from "../context/ThemeContext";

const InitialLayout = () => {
  const { authState } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    if (authState?.authenticated) {
      // If the user is authenticated, redirect to the private route
      router.replace("/(private)/home");
    } else {
      // If the user is not authenticated, redirect to the public route
      router.replace("/(public)/login");
    }
  }, [authState?.authenticated]);

  return <Slot />; // This is where the child routes will be rendered
};

const Layout = () => {
  return (
    //wrap the entire app in the AuthProvider to protect the private routes
    <AuthProvider>
      <ThemeProvider>
        <InitialLayout />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default Layout;

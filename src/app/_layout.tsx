import React, { useEffect } from "react";
import { Slot, useRouter, useSegments } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";

const InitialLayout = () => {
  const { authState, onLogout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    if (authState?.authenticated) {
      // If the user is authenticated, redirect to the private route
      router.replace("/(private)/one");
    } else {
      // If the user is not authenticated, redirect to the public route
      router.replace("/(public)/login");
    }
  }, [authState?.authenticated]);

  return <Slot />; // This is where the child routes will be rendered
};

const Layout = () => {
  return (
    //wrap the entire app in the AuthProvider
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
};

export default Layout;

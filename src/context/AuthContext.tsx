import { createContext, useContext, useState } from "react";

interface AuthProps {
  authState?: { authenticated: boolean | null };
  onLogin?: () => Promise<any>;
  onLogout?: () => Promise<any>;
}

const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    authenticated: boolean | null;
  }>({
    authenticated: null,
  });

  const login = async () => {
    // Update the auth state
    setAuthState({
      authenticated: true,
    });
  };

  const logout = async () => {
    //reset the auth state
    setAuthState({
      authenticated: false,
    });
  };

  const value = {
    onLogin: login,
    onLogout: logout,
    authState,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

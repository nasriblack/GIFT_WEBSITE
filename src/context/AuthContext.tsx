import { createContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  authenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

// This would normally come from an environment variable or secure storage
// For this demo, it's hardcoded (you'll replace with your actual password)
const CORRECT_PASSWORD = 'iloveyou';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user was previously authenticated
    const storedAuth = localStorage.getItem('authenticated');
    if (storedAuth === 'true') {
      setAuthenticated(true);
    }
  }, []);

  const login = (password: string) => {
    const isCorrect = password === CORRECT_PASSWORD;
    if (isCorrect) {
      setAuthenticated(true);
      localStorage.setItem('authenticated', 'true');
    }
    return isCorrect;
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem('authenticated');
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
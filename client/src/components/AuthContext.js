import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Set the user data in state
    setUser(userData);
  };

  const logout = () => {
    // Clear the user data from state
    setUser(null);
  };

  const updateUser = (userData) => {
    // Update the user data in state
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
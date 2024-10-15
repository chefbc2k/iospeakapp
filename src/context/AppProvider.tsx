import * as React from 'react';
import { AuthContext } from './AuthContext';
import { ThemeContext } from './ThemeContext';

export const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthContext.Provider value={{}}>
      <ThemeContext.Provider value={{}}>
        {children}
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
};
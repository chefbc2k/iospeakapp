import React from 'react';
import { ThirdwebProvider } from '@thirdweb-dev/react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { AppProvider } from './src/context/AppProvider';

export default function App() {
  return (
    <ThirdwebProvider>
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    </ThirdwebProvider>
  );
}
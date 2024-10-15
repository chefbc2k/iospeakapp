import React from 'react';
import { ThirdwebProvider } from '@thirdweb-dev/react-native';
import AppNavigator from './navigation/AppNavigator';
import { AppProvider } from './context/AppProvider';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <ThirdwebProvider activeChain="ethereum">
      <AppProvider>
        <AppNavigator />
        <Toast />
      </AppProvider>
    </ThirdwebProvider>
  );
};

export default App;
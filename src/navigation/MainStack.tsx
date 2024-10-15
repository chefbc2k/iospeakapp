import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';

const Stack = createStackNavigator();

/**
 * The main stack navigator for the whole app.
 */
export const MainStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Screen One"
      screenOptions={{
        headerStyle: {
          // backgroundColor: "white",
        },
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="One"
        component={ScreenOne}
      />
      <Stack.Screen
        name="Two"
        component={ScreenTwo}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStack;
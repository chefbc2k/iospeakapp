import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ManageContracts from '../screens/Admin/ManageContracts';
import DeployContract from '../screens/Admin/DeployContract';
import EditContract from '../screens/Admin/EditContract';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import SettingsScreen from '../screens/Profile/SettingsScreen';
import UnauthorizedScreen from '../screens/Admin/UnauthorizedScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen
          name="ManageContracts"
          component={ManageContracts}
          options={{ title: 'Manage Contracts' }}
        />
        <Stack.Screen
          name="DeployContract"
          component={DeployContract}
          options={{ title: 'Deploy New Contract' }}
        />
        <Stack.Screen
          name="EditContract"
          component={EditContract}
          options={{ title: 'Edit Contract' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'My Profile' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        <Stack.Screen
          name="Unauthorized"
          component={UnauthorizedScreen}
          options={{ title: 'Unauthorized Access' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
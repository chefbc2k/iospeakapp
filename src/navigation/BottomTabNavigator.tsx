import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreIndex from '../screens/Explore/Index';
import MarketplaceExploreNFTs from '../screens/Marketplace/ExploreNFTs';
import ShopIndex from '../screens/Shop/Index';
import ProfileIndex from '../screens/Profile/Index';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={ExploreIndex} />
      <Tab.Screen name="Marketplace" component={MarketplaceExploreNFTs} />
      <Tab.Screen name="Shop" component={ShopIndex} />
      <Tab.Screen name="Profile" component={ProfileIndex} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
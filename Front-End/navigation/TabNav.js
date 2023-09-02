/* eslint-disable prettier/prettier */
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import ProfilePage from '../screens/ProfilePage';
import SearchPage from '../screens/SearchPage';
import DeliveryPage from '../screens/DeliveryPage';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator backBehavior="history">
      <Tab.Screen name="Home" component={HomePage} options={{}}/>
      <Tab.Screen name="Profile" component={ProfilePage} />
      <Tab.Screen name="Search" component={SearchPage} />
      <Tab.Screen name="Delivery" component={DeliveryPage} />
    </Tab.Navigator>
  );
};

export default TabNav;

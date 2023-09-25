/* eslint-disable prettier/prettier */
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import ProfilePage from '../screens/ProfilePage';
import SearchPage from '../screens/SearchPage';
import DeliveryForm from '../components/DeliveryForm';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator backBehavior="history">
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{headerShown: false}}
      />
      {/* <Tab.Screen
        name="Delivery"
        component={DeliveryForm}
        options={{headerShown: true, title: 'Delivery Form'}}
      /> */}
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

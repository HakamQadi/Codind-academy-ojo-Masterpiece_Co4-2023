/* eslint-disable prettier/prettier */
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import ProfilePage from '../screens/ProfilePage';
import SearchPage from '../screens/SearchPage';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator backBehavior="history">
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/icons/home-stroke.png')}
              />
            ) : (
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/icons/home.png')}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/icons/search-stroke.png')}
              />
            ) : (
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/icons/search.png')}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/icons/user-stroke.png')}
              />
            ) : (
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/icons/user.png')}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

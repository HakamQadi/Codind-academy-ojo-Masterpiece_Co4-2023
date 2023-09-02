/* eslint-disable prettier/prettier */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import RegisterPage from '../screens/RegisterPage';
import HomePage from '../screens/HomePage';
import SearchPage from '../screens/SearchPage';
import DeliveryPage from '../screens/DeliveryPage';
import ProfilePage from '../screens/ProfilePage';
import Login from '../components/Login';
import TabNav from './TabNav';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{headerShadowVisible: false, headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShadowVisible: false, headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={TabNav} // Use the BottomTabNavigator here
          options={{headerShadowVisible: false, headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

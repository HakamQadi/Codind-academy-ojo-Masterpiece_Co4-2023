/* eslint-disable prettier/prettier */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import RegisterPage from '../screens/RegisterPage';
import Login from '../components/Login';
import TabNav from './TabNav';
import DeliveryForm from '../components/DeliveryForm';
import ReceivingForm from '../components/ReceivingForm';
import ShipmentDetails from '../components/ShipmentDetails';
import PlaceOrderSuccess from '../components/PlaceOrderSuccess';
import DriverHome from '../screens/driver/DriverHome';
import DriverOrder from '../screens/driver/DriverOrder';
import DriverProfile from '../screens/driver/DriverProfile';

const Stack = createNativeStackNavigator();

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
          component={TabNav} 
          options={{headerShadowVisible: false, headerShown: false}}
        />
        <Stack.Screen
          name="DeliveryForm"
          component={DeliveryForm}
          options={{headerTitle: 'Delivery Form'}}
        />
        <Stack.Screen
          name="ReceivingForm"
          component={ReceivingForm}
          options={{headerTitle: 'Receiving Form'}}
        />
        <Stack.Screen
          name="ShipmentDetails"
          component={ShipmentDetails}
          options={{headerTitle: 'Shipment Details'}}
        />
        <Stack.Screen
          name="OrderPlaced"
          component={PlaceOrderSuccess}
          options={{headerTitle: 'Order Placed'}}
        />
        <Stack.Screen
          name="DriverHome"
          component={DriverHome}
          options={{headerShadowVisible: false, headerShown: false}}
        />
        <Stack.Screen
          name="DriverOrder"
          component={DriverOrder}
          options={{headerShadowVisible: false, headerShown: false}}
        />
         <Stack.Screen
          name="DriverProfile"
          component={DriverProfile}
          options={{headerShadowVisible: false, headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

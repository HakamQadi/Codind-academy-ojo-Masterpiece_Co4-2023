import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useAppContext} from '../context/AppContext'; // Import the context hook

const PlaceOrderSuccess = ({navigation}) => {
  const {mergedData} = useAppContext();
  const handleSubmit = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 20}}>
        Order Placed Successfully!
      </Text>
      <Text>Your order details:</Text>
      <Text>Sending Address: {mergedData.delivery_address}</Text>
      <Text>Receiving Address: {mergedData.recieving_address}</Text>
      <Text>Shipment Description: {mergedData.shipmentDescription}</Text>
      <Text>Shipment Weight: {mergedData.shipmentWeight}</Text>

      <TouchableOpacity onPress={handleSubmit}>
        <Text
          style={{
            marginTop: 20,
            color: 'blue',
            textDecorationLine: 'underline',
          }}>
          Back to Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlaceOrderSuccess;

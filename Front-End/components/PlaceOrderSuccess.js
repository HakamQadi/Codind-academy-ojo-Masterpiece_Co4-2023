import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const PlaceOrderSuccess = ({route, navigation}) => {
  const {orderDetails} = route.params;

  const handleSubmit = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 20}}>
        Order Placed Successfully!
      </Text>
      <Text>Your order details:</Text>
      <Text>Sending Address: {orderDetails.sendingAddress}</Text>
      <Text>Receiving Address: {orderDetails.receivingAddress}</Text>
      <Text>Shipment Description: {orderDetails.shipmentDescription}</Text>
      <Text>Shipment Weight: {orderDetails.shipmentWeight}</Text>

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

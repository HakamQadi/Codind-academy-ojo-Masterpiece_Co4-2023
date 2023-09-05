/* eslint-disable prettier/prettier */
import {View, Text, Button} from 'react-native';
import React from 'react';

const ShipmentDetails = () => {
  return (
    <View>
      {/* <Text>ShipmentDetails</Text> */}
      {/* Your form fields */}
      <Button
        title="Place Order"
        onPress={() => console.log('Placing Order')}
      />
    </View>
  );
};

export default ShipmentDetails;

/* eslint-disable prettier/prettier */
import {View, Text, Button, TextInput, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {FormStyle} from '../style_sheets/StylesSheet';
import {HomeStyles} from '../style_sheets/StylesSheet';

const ShipmentDetails = ({mergedData}) => {
  const popDelivery = [
    {
      id: 1,
      title: 'Small',
      thumbnail: require('../assets/images/popular_service.jpg'),
    },
    {
      id: 2,
      title: 'Medium',
      thumbnail: require('../assets/images/package_service.jpg'),
    },
    {
      id: 3,
      title: 'Large',
      thumbnail: require('../assets/images/package_service.jpg'),
    },
  ];
  console.log(mergedData)
  return (
    <View style={FormStyle.container}>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={[FormStyle.input, {width: '40%', marginRight: 10}]}
          placeholder="Address"
          placeholderTextColor={FormStyle.placeholderColor.color}
          // value={receivingData.address}
          // onChangeText={text => handleChange('address', text)}
        />
        <TextInput
          style={[FormStyle.input, {width: '40%'}]}
          placeholder="Address Details"
          placeholderTextColor={FormStyle.placeholderColor.color}
          // value={receivingData.addressDetails}
          // onChangeText={text => handleChange('addressDetails', text)}
        />
       
      </View>
    </View>
  );
};

export default ShipmentDetails;

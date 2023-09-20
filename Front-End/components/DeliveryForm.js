/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {FormStyle} from '../style_sheets/StylesSheet';
import {useAppContext} from '../context/AppContext';

const DeliveryForm = ({navigation}) => {
  const {updateMergedData} = useAppContext();

  const [deliveryData, setDeliveryData] = useState({
    deliveryAddress: '1',
    deliveryAddressDetails: '1',
    deliveryCity: '1',
    deliveryName: '1',
    deliveryPhoneNumber: '1',
    deliveryAdditionalDescription: '1',
  });

  const handleChange = (field, value) => {
    setDeliveryData({...deliveryData, [field]: value});
  };

  const handleSubmit = () => {
    // console.log('deliveryData ',deliveryData)
    updateMergedData(deliveryData);
    // navigation.navigate('ReceivingForm', {deliveryData});
    navigation.navigate('ReceivingForm');
  };

  return (
    <View style={FormStyle.container}>
      {/* <Text style={FormStyle.text}>DeliveryForm</Text> */}
      <TextInput
        style={FormStyle.input}
        placeholder="Address"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={deliveryData.address}
        onChangeText={text => handleChange('deliveryAddress', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="Address Details"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={deliveryData.addressDetails}
        onChangeText={text => handleChange('deliveryAddressDetails', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="City"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={deliveryData.city}
        onChangeText={text => handleChange('deliveryCity', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="Name"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={deliveryData.name}
        onChangeText={text => handleChange('deliveryName', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="Phone Number"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={deliveryData.phoneNumber}
        onChangeText={text => handleChange('deliveryPhoneNumber', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholderTextColor={FormStyle.placeholderColor.color}
        placeholder="Additional Description"
        value={deliveryData.additionalDescription}
        onChangeText={text => handleChange('deliveryAdditionalDescription', text)}
      />
      {/* <Button
        title="Submit"
        onPress={handleSubmit}
        style={FormStyle.button}
        color={FormStyle.buttonText.color}
      /> */}
      <View style={FormStyle.buttonContainer}>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={FormStyle.button}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeliveryForm;

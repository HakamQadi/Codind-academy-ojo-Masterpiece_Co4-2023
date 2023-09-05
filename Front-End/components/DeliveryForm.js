/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {FormStyle} from '../style_sheets/StylesSheet';

const DeliveryForm = ({navigation}) => {
  const [deliveryData, setDeliveryData] = useState({
    address: '',
    addressDetails: '',
    city: '',
    name: '',
    phoneNumber: '',
    additionalDescription: '',
  });

  const handleChange = (field, value) => {
    setDeliveryData({...deliveryData, [field]: value});
  };

  const handleSubmit = () => {
    // Here, you can perform form submission logic and send data as needed.
    // For now, let's just navigate to the next page.
    navigation.navigate('ReceivingForm', {deliveryData});
  };

  return (
    <View style={FormStyle.container}>
      {/* <Text style={FormStyle.text}>DeliveryForm</Text> */}
      <TextInput
        style={FormStyle.input}
        placeholder="Address"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={deliveryData.address}
        onChangeText={text => handleChange('address', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="Address Details"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={deliveryData.addressDetails}
        onChangeText={text => handleChange('addressDetails', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="City"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={deliveryData.city}
        onChangeText={text => handleChange('city', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="Name"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={deliveryData.name}
        onChangeText={text => handleChange('name', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="Phone Number"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={deliveryData.phoneNumber}
        onChangeText={text => handleChange('phoneNumber', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholderTextColor={FormStyle.placeholderColor.color}
        placeholder="Additional Description"
        value={deliveryData.additionalDescription}
        onChangeText={text => handleChange('additionalDescription', text)}
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

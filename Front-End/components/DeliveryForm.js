/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {FormStyle} from '../style_sheets/StylesSheet';
import {useAppContext} from '../context/AppContext';

const DeliveryForm = ({navigation}) => {
  const {updateMergedData, user} = useAppContext();

  const [deliveryData, setDeliveryData] = useState({
    delivery_address: '',
    address_details: '',
    city: '',
    name: user.fullname,
    phone: '',
    additional_desc: '',
  });

  const handleChange = (field, value) => {
    setDeliveryData({...deliveryData, [field]: value});
  };

  const handleSubmit = () => {
    updateMergedData(deliveryData);
    navigation.navigate('ReceivingForm');
  };

  return (
    <View style={FormStyle.container}>
      <TextInput
        style={FormStyle.input}
        placeholder="Address"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={deliveryData.delivery_address}
        onChangeText={text => handleChange('delivery_address', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="Address Details"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={deliveryData.address_details}
        onChangeText={text => handleChange('address_details', text)}
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
        value={deliveryData.phone}
        onChangeText={text => handleChange('phone', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholderTextColor={FormStyle.placeholderColor.color}
        placeholder="Additional Description"
        value={deliveryData.additional_desc}
        onChangeText={text => handleChange('additional_desc', text)}
      />
      <View style={FormStyle.buttonContainer}>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={FormStyle.button}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeliveryForm;

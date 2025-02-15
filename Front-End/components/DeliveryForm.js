/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {FormStyle} from '../style_sheets/StylesSheet';
import {useAppContext} from '../context/AppContext';

const DeliveryForm = ({navigation, route}) => {
  const {title} = route.params;

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
    // Check if any of the fields are empty
    if (
      deliveryData.delivery_address === '' ||
      deliveryData.address_details === '' ||
      deliveryData.city === '' ||
      deliveryData.name === '' ||
      deliveryData.phone === ''
    ) {
       Alert.alert('Incomplete Information', 'Please fill in all required fields.');
      return;
    }


    if (!/^[0-9]+$/.test(deliveryData.phone)) {
      Alert.alert('Invalid Phone Number', 'Phone number should contain only numbers.');
      return;
    }
    if (deliveryData.phone.length !== 10) {
      Alert.alert('Invalid Phone Number', 'Phone number should be 10 digits.');
      return;
    }

    if (!/^(077|078|079)/.test(deliveryData.phone)) {
      Alert.alert('Invalid Phone Number', 'Phone number should start with 077, 078, or 079.');
      return;
    }


    updateMergedData(deliveryData);
    navigation.navigate('ReceivingForm');
    setDeliveryData({
      delivery_address: '',
      address_details: '',
      city: '',
      name: user.fullname,
      phone: '',
      additional_desc: '',
    });
  };

  return (
    <View style={FormStyle.container}>
      <Text style={FormStyle.title}>{title}</Text>
      <TextInput
        style={FormStyle.input}
        placeholder="Address *"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={deliveryData.delivery_address}
        onChangeText={text => handleChange('delivery_address', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="Address Details *"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={deliveryData.address_details}
        onChangeText={text => handleChange('address_details', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="City *"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={deliveryData.city}
        onChangeText={text => handleChange('city', text)}
      />
      <TextInput
        style={[FormStyle.input, {color: 'black'}]}
        placeholder="Name *"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={deliveryData.name}
        onChangeText={text => handleChange('name', text)}
        editable={false}
      />
      <TextInput
        keyboardType="numeric"
        textContentType="telephoneNumber"
        style={FormStyle.input}
        placeholder="Phone Number *"
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

/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  DatePickerAndroid,
} from 'react-native';
import {FormStyle} from '../style_sheets/StylesSheet';

const ReceivingForm = ({navigation, route}) => {
  const deliveryData = route.params.deliveryData;

  const [receivingData, setReceivingData] = useState({
    address: '',
    addressDetails: '',
    city: '',
    name: '',
    phoneNumber: '',
    additionalDescription: '',
    selectedDate: '', // Add a selectedDate field for the date picker
  });

  const handleChange = (field, value) => {
    setReceivingData({...receivingData, [field]: value});
  };

  const handleDatePick = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date(),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // User has picked a date, format it and set it in receivingData
        const selectedDate = `${year}-${month + 1}-${day}`;
        setReceivingData({...receivingData, selectedDate});
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  };

  const handleSubmit = () => {
    // Merge receivingData and deliveryData
    const mergedData = {...receivingData, ...deliveryData};

    // Here, you can perform form submission logic and send mergedData as needed.
    // For now, let's just navigate to the next page.
    navigation.navigate('ShipmentDetails', {mergedData});
  };

  return (
    <View style={FormStyle.container}>
      <TextInput
        style={FormStyle.input}
        placeholder="Address"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={receivingData.address}
        onChangeText={text => handleChange('address', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="Address Details"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={receivingData.addressDetails}
        onChangeText={text => handleChange('addressDetails', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="City"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={receivingData.city}
        onChangeText={text => handleChange('city', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="Name"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={receivingData.name}
        onChangeText={text => handleChange('name', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="Phone Number"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={receivingData.phoneNumber}
        onChangeText={text => handleChange('phoneNumber', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholderTextColor={FormStyle.placeholderColor.color}
        placeholder="Additional Description"
        value={receivingData.additionalDescription}
        onChangeText={text => handleChange('additionalDescription', text)}
      />

      {/* Date Picker */}
      <TouchableOpacity onPress={handleDatePick}>
        <Text style={FormStyle.button}>Pick a Date</Text>
      </TouchableOpacity>

      {/* Next Button */}
      <View style={FormStyle.buttonContainer}>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={FormStyle.button}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReceivingForm;

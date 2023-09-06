/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {FormStyle} from '../style_sheets/StylesSheet';
import DateTimePicker from '@react-native-community/datetimepicker';

const ReceivingForm = ({navigation, route}) => {
  const deliveryData = route.params.deliveryData;
  const [date, setDate] = useState('');

  const [receivingData, setReceivingData] = useState({
    address: '',
    addressDetails: '',
    city: '',
    name: '',
    phoneNumber: '',
    additionalDescription: '',
    selectedDate: new Date(), // Add a selectedDate field for the date picker
    showDatePicker: false, // To control the visibility of the date picker
  });

  const handleChange = (field, value) => {
    setReceivingData({...receivingData, [field]: value});
  };
  // let formattedDate;
  //  = receivingData.selectedDate.toLocaleDateString();

  const handleDateChange = (event, selectedDate) => {
    if (event.type === 'set') {
      // User has selected a date
      const dateToString = selectedDate.toDateString();
      setReceivingData({...receivingData, dateToString});
      // console.log(selectedDate);
      setDate(dateToString);
      // formattedDate = selectedDate.toLocaleDateString();
    }
    setReceivingData({...receivingData, showDatePicker: false});
  };

  const showDatePicker = () => {
    setReceivingData({...receivingData, showDatePicker: true});
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

      <View style={FormStyle.datePickerContainer}>
        <View style={FormStyle.date}>
          <Text>{date}</Text>
        </View>
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={FormStyle.dateButton}>Pick a Date</Text>
        </TouchableOpacity>
      </View>

      {receivingData.showDatePicker && (
        <DateTimePicker
          value={receivingData.selectedDate}
          mode="date"
          display="spinner"
          onChange={handleDateChange}
        />
      )}

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

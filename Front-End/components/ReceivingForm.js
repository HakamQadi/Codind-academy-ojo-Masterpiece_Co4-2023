/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {FormStyle} from '../style_sheets/StylesSheet';
import DateTimePicker from '@react-native-community/datetimepicker';
import dateIcon from '../assets/icons/Date.png';
import {useAppContext} from '../context/AppContext';

const ReceivingForm = ({navigation}) => {
  const {updateMergedData} = useAppContext();

  const [selectedDate, setSelectedDate] = useState(null);

  const [receivingData, setReceivingData] = useState({
    recieving_address: '',
    recipient_addressDetails: '',
    recipient_city: '',
    recipient_name: '',
    recipient_phone: '',
    recipient_additionalDesc: '',
    recieving_date: '',
    showDatePicker: false, // Add showDatePicker state
  });

  const handleChange = (field, value) => {
    setReceivingData({...receivingData, [field]: value});
  };

  const handleDateChange = (event, newDate) => {
    setSelectedDate(newDate);
    setReceivingData({...receivingData, showDatePicker: false});
  };

  const showDatePicker = () => {
    setReceivingData({...receivingData, showDatePicker: true});
  };

  const handleSubmit = () => {
    const mergedData = {...receivingData, selectedDate};
    // const mergedData = {...receivingData};
    updateMergedData(mergedData);
    navigation.navigate('ShipmentDetails');
  };

  return (
    <View style={FormStyle.container}>
      <TextInput
        style={FormStyle.input}
        placeholder="Address"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={receivingData.recieving_address}
        onChangeText={text => handleChange('recieving_address', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="Address Details"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={receivingData.recipient_addressDetails}
        onChangeText={text => handleChange('recipient_addressDetails', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="City"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={receivingData.recipient_city}
        onChangeText={text => handleChange('recipient_city', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="Name"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={receivingData.recipient_name}
        onChangeText={text => handleChange('recipient_name', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="Phone Number"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={receivingData.recipient_phone}
        onChangeText={text => handleChange('recipient_phone', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholderTextColor={FormStyle.placeholderColor.color}
        placeholder="Additional Description"
        value={receivingData.recipient_additionalDesc}
        onChangeText={text => handleChange('recipient_additionalDesc', text)}
      />

      <View style={FormStyle.datePickerContainer}>
        <View style={FormStyle.date}>
          <Text>{selectedDate ? selectedDate.toDateString() : ''}</Text>
        </View>
        <TouchableOpacity
          style={[{alignSelf: 'center'}]}
          onPress={showDatePicker}>
          <Image source={dateIcon} style={FormStyle.ButtonIcon} />
        </TouchableOpacity>
      </View>

      {receivingData.showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()} // Provide a default value
          mode="date"
          display="spinner"
          onChange={handleDateChange}
        />
      )}

      <View style={FormStyle.buttonContainer}>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={FormStyle.button}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReceivingForm;

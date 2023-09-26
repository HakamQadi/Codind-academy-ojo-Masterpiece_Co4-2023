/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
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
    if (
      receivingData.recieving_address === '' ||
      receivingData.recipient_addressDetails === '' ||
      receivingData.recipient_city === '' ||
      receivingData.recipient_name === '' ||
      receivingData.recipient_phone === '' ||
      receivingData.selectedDate === ''
    ) {
      Alert.alert(
        'Incomplete Information',
        'Please fill in all required fields.',
      );
      return;
    }

    // Check if the recipient_phone field contains only numeric characters
    if (!/^[0-9]+$/.test(receivingData.recipient_phone)) {
      Alert.alert(
        'Invalid Phone Number',
        'Phone number should contain only numbers.',
      );
      return;
    }

    // Check if the phone number has exactly 10 digits and starts with 077, 078, or 079
    if (receivingData.recipient_phone.length !== 10) {
      Alert.alert(
        'Invalid Phone Number',
        'Phone number should have exactly 10 digits',
      );
      return;
    }

    if (!/^(077|078|079)/.test(receivingData.recipient_phone)) {
      Alert.alert(
        'Invalid Phone Number',
        'Phone number should start with 077, 078, or 079.',
      );
      return;
    }

    const mergedData = {...receivingData, selectedDate};
    // const mergedData = {...receivingData};
    updateMergedData(mergedData);
    navigation.navigate('ShipmentDetails');
  };

  return (
    <View style={FormStyle.container}>
      <TextInput
        style={FormStyle.input}
        placeholder="Address*"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={receivingData.recieving_address}
        onChangeText={text => handleChange('recieving_address', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="Address Details*"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={receivingData.recipient_addressDetails}
        onChangeText={text => handleChange('recipient_addressDetails', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="City*"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={receivingData.recipient_city}
        onChangeText={text => handleChange('recipient_city', text)}
      />
      <TextInput
        style={FormStyle.input}
        placeholder="Name*"
        placeholderTextColor={FormStyle.placeholderColor.color}
        value={receivingData.recipient_name}
        onChangeText={text => handleChange('recipient_name', text)}
      />
      <TextInput
        keyboardType="numeric"
        textContentType="telephoneNumber"
        style={FormStyle.input}
        placeholder="Phone Number*"
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
          <TextInput
            style={{color: 'black'}}
            editable={false}
            placeholderTextColor={FormStyle.placeholderColor.color}
            placeholder="Recieving Date"
            value={selectedDate ? selectedDate.toDateString() : ''}
          />
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

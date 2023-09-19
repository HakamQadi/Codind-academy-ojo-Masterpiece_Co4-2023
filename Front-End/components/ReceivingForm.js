/* eslint-disable prettier/prettier */
import React, {useState, useContext} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {FormStyle} from '../style_sheets/StylesSheet';
import DateTimePicker from '@react-native-community/datetimepicker';
import dateIcon from '../assets/icons/Date.png';
import {useAppContext} from '../context/AppContext'; // Import the context hook

const ReceivingForm = ({navigation,route}) => {
  const { deliveryData } = route.params;
  // const {deliveryData} = useAppContext(); // Access deliveryData from context
  const [date, setDate] = useState('');
  console.log('deliveryData ', deliveryData);
  const [receivingData, setReceivingData] = useState({
    address: 'shahed',
    addressDetails: '',
    city: '',
    name: '',
    phoneNumber: '',
    additionalDescription: '',
    // selectedDate: new Date(),
    // showDatePicker: false,
  });

  const handleChange = (field, value) => {
    setReceivingData({...receivingData, [field]: value});
  };

  const handleDateChange = (event, selectedDate) => {
    if (event.type === 'set') {
      const dateToString = selectedDate.toDateString();
      setReceivingData({...receivingData, selectedDate, dateToString});
      setDate(dateToString);
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
    console.log("mergedData 1 ",mergedData)
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
        <TouchableOpacity
          style={[{alignSelf: 'center'}]}
          onPress={showDatePicker}>
          <Image source={dateIcon} style={FormStyle.ButtonIcon} />
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

      <View style={FormStyle.buttonContainer}>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={FormStyle.button}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReceivingForm;

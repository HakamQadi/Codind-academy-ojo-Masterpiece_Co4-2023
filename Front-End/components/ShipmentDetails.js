/* eslint-disable prettier/prettier */
import {View, Text, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import {FormStyle} from '../style_sheets/StylesSheet';
import car from '../assets/icons/car.png';
import truck from '../assets/icons//truck.png';
import bike from '../assets/icons/bike.png';
import {useAppContext} from '../context/AppContext'; 
import axios from 'axios';

const ShipmentDetails = ({route, navigation}) => {
  const {updateMergedData, user, mergedData} = useAppContext();
  const [shipmentDetails, setShipmentDetails] = useState({
    shipmentDescription: '',
    shipmentWeight: '',
    shipmentSize: '',
  });
  const handleChange = (field, value) => {
    setShipmentDetails({...shipmentDetails, [field]: value});
  };
  const handleSubmit = async () => {

    if (
      shipmentDetails.shipmentDescription === '' ||
      shipmentDetails.shipmentWeight === '' ||
      shipmentDetails.shipmentSize === ''
    ) {
      Alert.alert(
        'Incomplete Information',
        'Please fill in all required fields.',
      );
      return;
    }

    await new Promise(resolve => {
      updateMergedData(shipmentDetails);
      resolve();
    });
    console.log('mergedData ', mergedData);
    console.log('user.userId ', user.userId);
    console.log('shipmentDetails ', shipmentDetails);
    await axios
      .post(
        `https://speedx-backend.onrender.com/order/add_order/${user.userId}`,
        mergedData,
      )
      .then(response => {
        console.log('mergedData ', mergedData);
        console.log('response ', response.data);
        navigation.navigate('OrderPlaced');
      })
      .catch(error => {
        setErrorMessage(error.response.data.message);
      });
  };
  return (
    <View style={FormStyle.container}>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={[FormStyle.input, {width: '40%', marginRight: 10}]}
          placeholder="Shipment Description*"
          placeholderTextColor={FormStyle.placeholderColor.color}
          value={shipmentDetails.shipmentDescription}
          onChangeText={text => handleChange('shipmentDescription', text)}
        />
        <TextInput
        keyboardType='numeric'
          style={[FormStyle.input, {width: '40%'}]}
          placeholder="Shipment Weight*"
          placeholderTextColor={FormStyle.placeholderColor.color}
          value={shipmentDetails.shipmentWeight}
          onChangeText={text => handleChange('shipmentWeight', text)}
        />
      </View>

      <View style={FormStyle.deleveryButtonIconContainer}>
        <TouchableOpacity
          onPress={() => handleChange('shipmentSize', 'Large')}
          style={FormStyle.deleveryButtonIcon}>
          <Image style={FormStyle.image} source={truck} />
          <Text style={FormStyle.textCard}>Large</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleChange('shipmentSize', 'Medium')}
          style={FormStyle.deleveryButtonIcon}>
          <Image style={FormStyle.image} source={car} />
          <Text style={FormStyle.textCard}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleChange('shipmentSize', 'Small')}
          style={FormStyle.deleveryButtonIcon}>
          <Image style={FormStyle.image} source={bike} />
          <Text style={FormStyle.textCard}>Small</Text>
        </TouchableOpacity>
      </View>
      <View style={FormStyle.buttonContainer}>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={FormStyle.button}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShipmentDetails;

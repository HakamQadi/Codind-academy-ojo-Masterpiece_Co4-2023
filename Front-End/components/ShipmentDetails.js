/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import {FormStyle} from '../style_sheets/StylesSheet';
import {HomeStyles} from '../style_sheets/StylesSheet';
import car from '../assets/icons/car.png';
import truck from '../assets/icons//truck.png';
import bike from '../assets/icons/bike.png';
import {useAppContext} from '../context/AppContext'; // Import the context hook

const ShipmentDetails = ({route, navigation}) => {
  const {updateMergedData} = useAppContext();
  const [shipmentDetails, setShipmentDetails] = useState({
    shipmentDescription: '',
    shipmentWeight: '',
  });
  const handleChange = (field, value) => {
    setShipmentDetails({...shipmentDetails, [field]: value});
  };
  // const shipmentDetails = {
  //   shipmentDescription: '',
  //   shipmentWeight: '',
  // };
  // const {mergedData} = route.params;
  // const allData = {...mergedData, ...shipmentDetails};
  const handleSubmit = () => {
    // Create an object with the order details you want to pass
    // console.log('allData', allData);

    // const orderDetails = {
    // sendingAddress: mergedData.deliveryAddress,
    // receivingAddress: mergedData.address,
    // shipmentDescription: '' /* Get the description from the input field */,
    // shipmentWeight: '' /* Get the weight from the input field */,
    // };

    // Navigate to PlaceOrderSuccess and pass orderDetails as a parameter
    // navigation.navigate('OrderPlaced', {orderDetails});

    // console.log('shipmentDetails ', shipmentDetails);
    updateMergedData(shipmentDetails);
    navigation.navigate('OrderPlaced');
  };
  // const popDelivery = [
  //   {
  //     id: 1,
  //     title: 'Small',
  //     thumbnail: require('../assets/images/popular_service.jpg'),
  //   },
  //   {
  //     id: 2,
  //     title: 'Medium',
  //     thumbnail: require('../assets/images/package_service.jpg'),
  //   },
  //   {
  //     id: 3,
  //     title: 'Large',
  //     thumbnail: require('../assets/images/package_service.jpg'),
  //   },
  // ];
  // console.log(mergedData);
  return (
    <View style={FormStyle.container}>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={[FormStyle.input, {width: '40%', marginRight: 10}]}
          placeholder="Shipment Description"
          placeholderTextColor={FormStyle.placeholderColor.color}
          value={shipmentDetails.shipmentDescription}
          onChangeText={text => handleChange('shipmentDescription', text)}
        />
        <TextInput
          style={[FormStyle.input, {width: '40%'}]}
          placeholder="Shipment Weight"
          placeholderTextColor={FormStyle.placeholderColor.color}
          value={shipmentDetails.shipmentWeight}
          onChangeText={text => handleChange('shipmentWeight', text)}
        />
      </View>

      <View style={FormStyle.deleveryButtonIconContainer}>
        <TouchableOpacity style={FormStyle.deleveryButtonIcon}>
          <Image style={FormStyle.image} source={truck} />
          <Text style={FormStyle.textCard}>Large</Text>
        </TouchableOpacity>
        <TouchableOpacity style={FormStyle.deleveryButtonIcon}>
          <Image style={FormStyle.image} source={car} />
          <Text style={FormStyle.textCard}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={FormStyle.deleveryButtonIcon}>
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

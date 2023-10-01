import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {useAppContext} from '../context/AppContext';

const PlaceOrderSuccess = ({navigation}) => {
  const {mergedData} = useAppContext();

  const handleSubmit = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>

      <View style={{alignItems:'center',marginTop:'50%'}}>
      <Text style={styles.header}>Order Placed Successfully!</Text>
        <Text style={styles.text}>Your order details:</Text>
        <View style={styles.card}>
          <Text style={styles.detail}>
            Sending Address:{' '}
            <Text style={{color: 'green'}}>{mergedData.delivery_address}</Text>
          </Text>
          <Text style={styles.detail}>
            Receiving Address:{' '}
            <Text style={{color: 'green'}}>{mergedData.recieving_address}</Text>
          </Text>
          <Text style={styles.detail}>
            Shipment Description:{' '}
            <Text style={{color: 'green'}}>
              {mergedData.shipmentDescription}
            </Text>
          </Text>
          <Text style={styles.detail}>
            Shipment Weight:{' '}
            <Text style={{color: 'green'}}>{mergedData.shipmentWeight}</Text>
          </Text>
        </View>
      </View>

      <TouchableOpacity
        // title="Go Back to Home"
        onPress={() => navigation.navigate('Home')}
        style={[styles.button, {backgroundColor: '#fa4a0c'}]} // Change background color
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    elevation: 3,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  price: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#fa4a0c', // Change background color
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PlaceOrderSuccess;

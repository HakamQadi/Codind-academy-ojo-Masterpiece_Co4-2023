import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

const DriverOrder = ({navigation, route}) => {
  // Sample order data (replace with actual order data)
  const order = {
    pickupLocation: '123 Main St',
    deliveryLocation: '456 Elm St',
    description: 'Fragile items',
    recipientName: 'John Doe',
    clientName: 'Jane Smith',
    recipientPhone: '123-456-7890',
    clientPhone: '987-654-3210',
    date: 'October 15, 2023',
  };

  const handleAcceptPress = () => {
    Alert.alert(
      'Accept Order',
      'Are you sure you want to accept this order?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('Order acceptance canceled');
            // navigation.reset({index: 0, routes: [{name: 'DriverHome'}]});
            // navigation.goBack();
          },
          style: 'cancel',
        },
        {
          text: 'Accept',
          onPress: () => {
            // Handle order acceptance logic here
            console.log('Order accepted');
            // navigation.goBack();

          },
        },
      ],
      {cancelable: false},
    );
  };

  const handleCancelPress = () => {
    Alert.alert(
      'Cancel Order',
      'Are you sure you want to cancel this order?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Order cancellation canceled'),
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            // Handle order cancellation logic here
            console.log('Order canceled');
            navigation.goBack();
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Order ID : #0001</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Pickup Location</Text>
            <Text>{order.pickupLocation}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Delivery Location</Text>
            <Text>{order.deliveryLocation}</Text>
          </View>
        </View>
        <View style={styles.largeCard}>
          <Text style={styles.cardTitle}>Description</Text>
          <Text>{order.description}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Recipient Name</Text>
            <Text>{order.recipientName}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Client Name</Text>
            <Text>{order.clientName}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Recipient Phone</Text>
            <Text>{order.recipientPhone}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Client Phone</Text>
            <Text>{order.clientPhone}</Text>
          </View>
        </View>
        <View style={styles.largeCard}>
          <Text style={styles.cardTitle}>Date</Text>
          <Text>{order.date}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          // title="Go Back to Home"
          onPress={handleAcceptPress}
          style={[styles.button, {backgroundColor: '#fa4a0c'}]} // Change background color
        >
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // title="Go Back to Home"
          onPress={handleCancelPress}
          style={[styles.button, {backgroundColor: '#fa4a0c'}]} // Change background color
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        {/* <Button title="Accept" onPress={handleAcceptPress} /> */}
        {/* <Button title="Cancel" onPress={handleCancelPress} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 5, // This is for Android devices
    padding: 10,
    // flexDirection: 'row',
  },
  largeCard: {
    // flex: 1,
    height: 150,
    margin: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 5, // This is for Android devices
    padding: 10,
    // flexDirection: 'row',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fa4a0c',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    flex: 1,
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
  headerText: {
    marginBottom: 20,
    marginLeft: 10,
    fontWeight: '700',
    fontSize: 25,
    color: '#fa4a0c',
  },
});

export default DriverOrder;

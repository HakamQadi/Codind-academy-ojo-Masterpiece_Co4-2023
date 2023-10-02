import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { useAppContext } from '../../context/AppContext';
// import {useAppContext} from '../context/AppContext';

const Card = ({children}) => {
  return <View style={styles.card}>{children}</View>;
};

const DriverProfile = ({navigation, route}) => {
  const {user} = useAppContext();
console.log(user)
  const handleLogout = () => {
    // You can add your logout logic here
    // For example, clearing user data and navigating to the login screen
    // Replace 'Login' with the name of your login screen in the navigation stack.
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Profile Page</Text> */}
      <Image
        source={require('../../assets/images/profile.png')}
        // source={require('../../a')}
        style={styles.profilePic}
      />
      <View>
        <Card>
          <Text style={styles.label}>User ID:</Text>
          <Text style={styles.info}>{user.userId}</Text>
        </Card>
        <Card>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.info}>{user.fullname}</Text>
        </Card>
        <Card>
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.info}>{user.phone}</Text>
        </Card>
      </View>
      {/* Add more cards for additional user information */}

      {/* Buttons at the bottom */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          // title="Go Back to Home"
          onPress={() => navigation.navigate('DriverHome')}
          style={[styles.button, {backgroundColor: '#fa4a0c'}]} // Change background color
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // title="Logout"
          onPress={handleLogout}
          style={[styles.button, {backgroundColor: '#fa4a0c'}]} // Change background color
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 16,
    marginBottom: 16,
    maxWidth: '90%', // Set the width to 90%
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#555',
  },
  info: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
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
  profilePic: {
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
    borderRadius: 75, // Half of the width and height to make it circular
    marginTop: 100,
    marginBottom: -150,
    borderColor: 'red',
    borderWidth: 5,
  },
});

export default DriverProfile;

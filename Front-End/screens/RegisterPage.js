/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {ImageBackground} from 'react-native';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import {StyleSheet} from 'react-native';
import {useState} from 'react';

const RegisterPage = ({navigation}) => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };
  const handleLogIn = () => {
    navigation.navigate('Home');
  };
  return (
    <ImageBackground
      source={require('../assets/images/signupIMG.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.headline}>Book A Driver</Text>
          <Text style={styles.text}>effortlessly sen packages anywhere</Text>
        </View>
        {isSignUp ? (
          <SignUp toggleForm={toggleForm} />
        ) : (
          <Login toggleForm={toggleForm} handleLogIn={handleLogIn} />
        )}
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Adjust the image's resizeMode as needed
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  headline: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text: {
    color: 'white',
    fontWeight: '300',
    fontSize: 20,
  },
});
export default RegisterPage;
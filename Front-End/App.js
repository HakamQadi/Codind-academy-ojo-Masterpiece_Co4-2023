/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <ImageBackground
      source={require('././assets/images/signupIMG.jpg')}
      style={styles.backgroundImage}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.headline}>Book A Driver</Text>
          <Text style={styles.text}>effortlessly sen packages anywhere</Text>
        </View>
        {isSignUp ? (
          <SignUp toggleForm={toggleForm} />
        ) : (
          <Login toggleForm={toggleForm} />
        )}
      </View>
    </ImageBackground>
  );
}

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

export default App;

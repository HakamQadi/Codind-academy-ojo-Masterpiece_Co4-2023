/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {LoginStyles} from '../style_sheets/StylesSheet';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import axios from 'axios';

const Login = ({toggleForm, handleLogIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const login = () => {
    const values = {
      email: email,
      password: password,
    };
    // console.log(values)
    axios
      .post('https://speedx-backend.onrender.com/user/login', values)
      .then(response => {
        // Handle the API response data here
        // console.log('Data from API:', response.data.data.drivers[0]);
        // console.log('response',response.data);
        console.log('Login successfull');
        handleLogIn();
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error fetching data:', error.response.data.message);
        setErrorMessage(error.response.data.message);
      });
  };
  return (
    <View style={LoginStyles.container}>
      <Text style={LoginStyles.title}>Login</Text>

      <TextInput
        style={LoginStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={LoginStyles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errorMessage && (
        <Text style={LoginStyles.errorMessage}>{errorMessage}</Text>
      )}
      <View style={LoginStyles.buttonContainer}>
        <TouchableOpacity onPress={login}>
          <Text style={LoginStyles.button}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={LoginStyles.loginContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={toggleForm}>
          <Text style={LoginStyles.toggleText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

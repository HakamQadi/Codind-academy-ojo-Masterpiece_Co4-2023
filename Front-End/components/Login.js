/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {LoginStyles} from '../style_sheets/StylesSheet';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const Login = ({toggleForm}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    // Redirect to the logged-in state or show a success message
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
      <View style={LoginStyles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin}>
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

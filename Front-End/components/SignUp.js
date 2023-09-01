/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {SignUpStyles} from '../style_sheets/StylesSheet';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const SignUp = ({toggleForm}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Implement your sign-up logic here
    // Redirect to the logged-in state or show a success message
  };
  return (
    <View style={SignUpStyles.container}>
      <Text style={SignUpStyles.title}>Sign Up</Text>
      <TextInput
        style={SignUpStyles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={SignUpStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={SignUpStyles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={SignUpStyles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <View style={SignUpStyles.buttonContainer}>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={SignUpStyles.button}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={SignUpStyles.loginContainer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={toggleForm}>
          <Text style={SignUpStyles.toggleText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

import React from 'react';
import {Text, TextInput, TouchableOpacity, View, Alert} from 'react-native';
// import { Formik } from 'formik';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {SignUpStyles} from '../style_sheets/StylesSheet';

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const register = values => {
  console.log(values)
  axios
    .post('https://speedx-backend.onrender.com/user/register', values)
    .then(response => {
      // Handle the API response data here
      // console.log('Data from API:', response.data.data.drivers[0]);
      console.log('register success');
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error fetching data:', error);
    });
};

const SignUp = ({toggleForm}) => {
  return (
    <Formik
      initialValues={{
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, {resetForm}) => {
        // Handle form submission here (e.g., API call)
        // console.log('Form submitted with values:', values);
        register(values);
        resetForm();
        Alert.alert('Success', 'Sign-up successful!');
        toggleForm();
        // navigation.navigate('Login');
      }}>
      {({values, handleChange, handleSubmit, errors, touched}) => (
        <View style={SignUpStyles.container}>
          <Text style={SignUpStyles.title}>Sign Up</Text>
          <TextInput
            style={SignUpStyles.input}
            placeholder="Full Name"
            value={values.fullname}
            onChangeText={handleChange('fullname')}
          />
          {touched.fullname && errors.fullname && (
            <Text style={SignUpStyles.errorText}>{errors.fullname}</Text>
          )}
          <TextInput
            style={SignUpStyles.input}
            placeholder="Email"
            value={values.email}
            onChangeText={handleChange('email')}
          />
          {touched.email && errors.email && (
            <Text style={SignUpStyles.errorText}>{errors.email}</Text>
          )}
          <TextInput
            style={SignUpStyles.input}
            placeholder="Password"
            value={values.password}
            onChangeText={handleChange('password')}
            secureTextEntry
          />
          {touched.password && errors.password && (
            <Text style={SignUpStyles.errorText}>{errors.password}</Text>
          )}
          <TextInput
            style={SignUpStyles.input}
            placeholder="Confirm Password"
            value={values.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            secureTextEntry
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <Text style={SignUpStyles.errorText}>{errors.confirmPassword}</Text>
          )}
          <View style={SignUpStyles.buttonContainer}>
            <TouchableOpacity onPress={handleSubmit}>
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
      )}
    </Formik>
  );
};

export default SignUp;

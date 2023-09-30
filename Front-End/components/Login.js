import React, {useState} from 'react';
import {LoginStyles} from '../style_sheets/StylesSheet';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native'; // Import ActivityIndicator
import {useAppContext} from '../context/AppContext';
import axios from 'axios';

const Login = ({toggleForm, handleLogIn}) => {
  const {setUser} = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const login = () => {
    setIsLoading(true); // Set loading to true when the login request starts
    const values = {
      email: email,
      password: password,
    };

    axios
      .post('https://speedx-backend.onrender.com/user/login', values)
      .then(response => {
        const userInfo = {
          fullname: response.data.data.fullname,
          userId: response.data.data.userId,
        };

        setUser(userInfo);
        // console.log('Login successful');
        handleLogIn();
      })
      .catch(error => {
        setErrorMessage(error.response.data.message);
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false when the request is completed (success or error)
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
      {isLoading ? ( // Show loading indicator if isLoading is true
        <ActivityIndicator
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            borderWidth: 3,
            borderColor: '#fc2f70',
            borderStyle: 'solid',
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'spin-stretch 2s ease infinite',
          }}
          size="large"
          color="#0000ff"
        />
      ) : (
        <>
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
        </>
      )}
    </View>
  );
};

export default Login;

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

const Login = ({toggleForm, handleLogIn, navigation}) => {
  const {setUser} = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);  

  const login = async () => {
    setIsLoading(true); 
    const values = {
      email: email,
      password: password,
    };

    await axios
      .post('https://speedx-backend.onrender.com/user/login', values)
      .then(response => {
        const userInfo = {
          fullname: response.data.data.fullname,
          userId: response.data.data.userId,
          phone: '0777777777',
          score: response.data.data.score,
        };

        setUser(userInfo);
        if (response.data.data.role === 'user') {
          handleLogIn('Main');
        } else if (response.data.data.role === 'driver') {
          handleLogIn('DriverHome');
        }
      })
      .catch(error => {
        setErrorMessage(error.response.data.message);
      })
      .finally(() => {
        setIsLoading(false); 
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
      {isLoading ? ( 
        <ActivityIndicator size="large" color="#fa4a0c" />
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

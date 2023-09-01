/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const SignUpStyles = StyleSheet.create({
  container: {
    height: '65%',
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 40,
    color: 'black',
  },
  buttonContainer: {
    marginTop: 30,
    marginBottom: 40,
    borderRadius: 40,
    overflow: 'hidden',
  },

  button: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#fa4a0c',
  },
  buttonText: {
    borderRadius: 40,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  toggleText: {
    color: '#B7076B',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LoginStyles = StyleSheet.create({
  container: {
    height: '50%',
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 40,
    color: 'black',
  },
  buttonContainer: {
    marginTop: 30,
    marginBottom: 40,
    borderRadius: 40,
    overflow: 'hidden',
  },
  button: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#fa4a0c',
  },
  buttonText: {
    borderRadius: 40,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  toggleText: {
    color: '#B7076B',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = {
  SignUpStyles,
  LoginStyles,
};

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
    borderRadius: 10,
    color: 'black',
  },
  buttonContainer: {
    marginTop: 30,
    marginBottom: 40,
    borderRadius: 10,
    overflow: 'hidden',
  },

  button: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#fa4a0c',
    fontWeight: '700',
  },
  buttonText: {
    borderRadius: 40,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  toggleText: {
    color: 'blue',
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
    borderRadius: 10,
    color: 'black',
  },
  buttonContainer: {
    marginTop: 30,
    marginBottom: 40,
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#fa4a0c',
    fontWeight: 'bold',
  },
  buttonText: {
    borderRadius: 40,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  toggleText: {
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 15,
  },
  iconButton: {
    marginStart: 8,
  },
  SearchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e7e7e7',
    marginTop: 15,
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderRadius: 7,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  bestSellersContainer: {
    flexDirection: 'column',
    marginTop: 30,
    padding: 15,
  },
  h2: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  thumbnail: {
    width: '100%',
    height: 155,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  card: {
    flex: 1, // Equal flex to distribute items evenly in columns
    margin: 8, // Margin between grid items
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingBottom: 7,
  },
});

module.exports = {
  SignUpStyles,
  LoginStyles,
  HomeStyles,
};
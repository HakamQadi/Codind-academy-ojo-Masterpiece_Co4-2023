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
  errorText: {
    color: 'red',
    marginBottom: 5,
    marginTop: -10,
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
  errorMessage: {
    color: 'red',
    textAlign: 'center',
  },
});

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 15,
    justifyContent: 'center',
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
    fontSize: 20,
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
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingBottom: 7,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    elevation: 5, // This is for Android devices
  },
  
});

const FormStyle = StyleSheet.create({
  title: {
    marginBottom:70,
    fontWeight:'800',
    fontSize:20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Background color
    // width: '50%',
  },
  placeholderColor: {
    color: '#d8d8d8', // Text color
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 1,
    // width: '50%',
  },
  button: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#fa4a0c',
    fontWeight: '700',
    width: 150,
  },
  buttonText: {
    borderRadius: 40,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 30,
    borderRadius: 10,
    overflow: 'hidden',
  },

  datePickerContainer: {
    flexDirection: 'row', // Display its children in a row (side by side)
    // alignItems: 'center', // Center its children vertically
    justifyContent: 'center', // Distribute space evenly between its children
    // marginHorizontal: 10, // Adjust the vertical margin as needed
  },
  date: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginRight: 65,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 1,
  },
  dateButton: {
    color: 'white',
    // fontSize: 18,
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#fa4a0c',
    fontWeight: '700',
    // width: 150,
  },
  ButtonIcon: {
    width: 27,
    height: 27,
    // justifyContent: 'center',
    alignSelf: 'center',
  },
  deleveryButtonIconContainer: {
    width: 330,
    // backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleveryButtonIcon: {
    width: 90,
    height: 80,
    backgroundColor: '#fa4a00',
    borderRadius: 10,
    elevation: 5,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 55,
    height: 55,
  },
  textCard: {
    marginBottom: 6,
    color: 'white',
    fontWeight: '500',
  },
});

const searchStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  input: {
    fontSize: 18,
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  viewDetailsBtn:{
    color:'#fa4a0c'
  },
  // searchBar: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#f2f2f2',
  //   borderRadius: 10,
  //   paddingHorizontal: 10,
  //   marginBottom: 10,
  // },
  // searchIcon: {
  //   width: 20, // Set the width of the search icon image
  //   height: 20, // Set the height of the search icon image
  //   marginRight: 10,
  // },
})
module.exports = {
  SignUpStyles,
  LoginStyles,
  HomeStyles,
  FormStyle,
  searchStyle
};

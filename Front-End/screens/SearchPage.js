import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert, // Import Alert from React Native
  TouchableOpacity,
  Image
} from 'react-native';
import {useAppContext} from '../context/AppContext';
import axios from 'axios';
import {searchStyle} from '../style_sheets/StylesSheet';

const SearchPage = () => {
  const {user} = useAppContext();
  const [recipientName, setRecipientName] = useState('');
  const [userOrders, setUserOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  const fetchUserOrders = async () => {
    try {
      const response = await axios.get(
        `https://speedx-backend.onrender.com/order/${user.userId}`,
      );
      setUserOrders(response.data.data.userOrders);
    } catch (error) {
      console.error('Error fetching user orders:', error);
    }
  };

  useEffect(() => {
    if (user.userId) {
      fetchUserOrders();
    }
  }, [user.userId]);

  useEffect(() => {
    const filtered = userOrders.filter(order =>
      order.recipient_name.toLowerCase().includes(recipientName.toLowerCase()),
    );
    setFilteredOrders(filtered);
  }, [recipientName, userOrders]);

  const clearSearch = () => {
    setRecipientName('');
    setFilteredOrders([]);
  };

  // Function to handle card click and show order details in an alert
  const handleCardClick = order => {
    Alert.alert(
      'Order Details',
      `Order ID: ${order._id}\nRecipient Name: ${order.recipient_name}\nrecipient_phone: 0${order.recipient_phone}\nMy phone: 0${order.phone}`,
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
    );
  };

  return (
    <View style={searchStyle.container}>
      {/* <View style={searchStyle.searchBar}> */}
        {/* <Image
          source={require('../assets/icons/search.png')}
          style={searchStyle.searchIcon}
        /> */}
        <TextInput
          style={searchStyle.input}
          placeholder="Enter Recipient Name"
          value={recipientName}
          onChangeText={text => setRecipientName(text)}
        />
      {/* </View> */}
      <FlatList
        data={filteredOrders}
        keyExtractor={item => item._id.toString()}
        renderItem={({item}) => (
          <View style={searchStyle.card} key={item._id}>
            <Text style={searchStyle.cardText}>Order ID: {item._id}</Text>
            <Text style={searchStyle.cardText}>
              Recipient Name: {item.recipient_name}
            </Text>
            {/* Add onPress prop to call the handleCardClick function */}
            <TouchableOpacity onPress={() => handleCardClick(item)}>
              <Text style={searchStyle.viewDetailsBtn}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default SearchPage;

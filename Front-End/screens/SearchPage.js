import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useAppContext} from '../context/AppContext';
import axios from 'axios';

const SearchPage = () => {
  const {user} = useAppContext();
  const [recipientName, setRecipientName] = useState(''); // State for recipient name input
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
  }, []);

  useEffect(() => {
    // Filter orders based on the recipient name
    const filtered = userOrders.filter(order =>
      order.recipient_name.toLowerCase().includes(recipientName.toLowerCase()),
    );
    setFilteredOrders(filtered);
  }, [recipientName, userOrders]);

  const clearSearch = () => {
    setRecipientName(''); // Clear the search input
    setFilteredOrders([]); // Clear the filtered orders
  };

  return (
    <View>
      <Text>SearchPage</Text>
      <TextInput
        placeholder="Enter Recipient Name"
        value={recipientName}
        onChangeText={text => setRecipientName(text)}
      />
      <Button title="Search" onPress={fetchUserOrders} />
      <Button title="Clear" onPress={clearSearch} /> {/* Add a clear button */}
      {/* Display filtered user orders */}
      <FlatList
        data={filteredOrders}
        keyExtractor={item => item._id.toString()}
        renderItem={({item}) => (
          <View style={styles.card} key={item._id}>
            <Text style={styles.cardText}>
              Order ID: {item.additional_desc}
            </Text>
            <Text style={styles.cardText}>
              Recipient Name: {item.recipient_name}
            </Text>
          </View>
        )}
      />
      {/* <FlatList
  data={filteredOrders}
  keyExtractor={(item) => item._id.toString()}
  renderItem={({ item }) => (
    <View style={styles.card} key={item._id}>
      <Text style={styles.cardText}>Order ID: {item.additional_desc}</Text>
      <Text style={styles.cardText}>Recipient Name: {item.recipient_name}</Text>
      
    </View>
  )}
/> */}
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
});

export default SearchPage;

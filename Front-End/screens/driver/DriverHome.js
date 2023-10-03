import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import {useAppContext} from '../../context/AppContext';
import Swiper from 'react-native-swiper';
import axios from 'axios';

const DriverHome = () => {
  const {navigate} = useNavigation();
  const [confirmExit, setConfirmExit] = useState(false);
  const [allOrders, setAllOrders] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const {user, deliverDone} = useAppContext();

  useEffect(() => {
    const backAction = () => {
      if (!confirmExit) {
        Alert.alert('Confirm Exit', 'Are you sure you want to exit the app?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'Exit',
            onPress: () => {
              setConfirmExit(true);
              BackHandler.exitApp();
            },
          },
        ]);
      } else {
        BackHandler.exitApp();
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => {
      backHandler.remove();
    };
  }, [confirmExit]);

  useEffect(() => {
    const fetchOrders = async () => {
      console.log("object2")

      try {
        const response = await axios.get(
          'https://speedx-backend.onrender.com/order',
        );
        setAllOrders(response.data.data.orders);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };

    fetchOrders(); 

    const fetchDrivers = async () => {
      console.log("object3")

      try {
        const response = await axios.get(
          'https://speedx-backend.onrender.com/admin',
        );
        const users = await response.data.data; 

        const driversArray = users
          .filter(user => user.role === 'driver')
          .map(driver => {
            return {
              name: driver.fullname,
              score: driver.score, 
            };
          });

        setDrivers(driversArray);
      } catch (error) {
        console.error('Failed to fetch drivers:', error);
      }
    };

    fetchDrivers(); 
  }, []); //
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={[styles.welcomeText, {color: 'red'}]}>
            {user.fullname}
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigate('DriverProfile')}>
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/profile.png')}
          />
        </TouchableOpacity>
        <Text>
          Current Level <Text style={{color: 'red'}}>{user.score}</Text>
        </Text>
      </View>

      <Swiper style={styles.imageSlider} autoplay={true} autoplayTimeout={2.5}>
        <View style={styles.slide}>
          <Image
            style={styles.slideImage}
            source={require('../../assets/images/delivery-person.png')} 
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.slideImage}
            source={require('../../assets/images/package-doorstep.jpg')} 
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.slideImage}
            source={require('../../assets/images/Packages-stacked.jpg')} 
          />
        </View>
      </Swiper>

      <Text style={styles.todaysDeliveryText}>Today's Delivery</Text>
      <ScrollView style={styles.driverList} nestedScrollEnabled={true}>
        {allOrders.length === 0 ? (
          <View style={[styles.clientCard, {justifyContent: 'center'}]}>
            <Text style={{color: 'white', fontWeight: '700'}}>
              No Orders Yet!
            </Text>
          </View>
        ) : (
          allOrders.map((order, index) => (
            <View key={index} style={styles.clientCard}>
              <Text style={{color: 'white', fontWeight: '700'}}>
                {order.name}
              </Text>
             
                <TouchableOpacity
                  onPress={() => navigate('DriverOrder', {orderId: order._id})}
                  style={styles.startDeliveryBtn}>
                  <Text>Start Delivery</Text>
                </TouchableOpacity>
            
             
            </View>
          ))
        )}
      </ScrollView>

      <Text style={styles.leaderboardText}>Driver Leaderboard</Text>
      <ScrollView style={styles.driverList} nestedScrollEnabled={true}>
        {drivers.map((driver, index) => (
          <View key={index} style={styles.driverCard}>
            <View style={{flexDirection: 'row', gap: 20}}>
              <Text
                style={{
                  color: 'white',
                }}>
                #{index + 1}
              </Text>
              <Text
                style={{
                  color: 'white',
                }}>
                {driver.name}
              </Text>
            </View>
            <Text
              style={{
                color: 'white',
              }}>
              Score: {driver.score} 
            </Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: 'red',
    borderWidth: 3,
  },
  centerContent: {
    alignItems: 'center',
    flexGrow: 1, 
    padding: 20,
  },
  todaysDeliveryText: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start', 
    marginLeft: 20,
  },
  clientCard: {
    backgroundColor: '#fa4b0c',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leaderboardText: {
    marginLeft: 20,
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start', 
  },
  driverCard: {
    alignSelf: 'center',
    backgroundColor: '#fa4b0c',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 70,
  },
  startDeliveryBtn: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 24,
  },
  imageSlider: {
    height: 200,  
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  driverList: {
    maxHeight: 200,  
  },
});

export default DriverHome;

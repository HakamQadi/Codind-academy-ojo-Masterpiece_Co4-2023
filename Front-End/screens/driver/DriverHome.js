import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
  BackHandler,
  Alert
} from 'react-native';
import { useAppContext } from '../../context/AppContext';

const driversData = [
  {name: 'Driver 1', score: 85},
  {name: 'Driver 2', score: 92},
  {name: 'Driver 3', score: 78},
  // Add more drivers as needed
];




const DriverHome = () => {
  const {navigate} = useNavigation();
  const [confirmExit, setConfirmExit] = useState(false);
  const {updateMergedData, user} = useAppContext();

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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
       <View>
       <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={[styles.welcomeText,{color:'red'}]}> {user.fullname}</Text>
       </View>
        <Image
          style={styles.profileImage}
          source={require('../../assets/images/profile.png')} // Replace with your actual profile image source
        />
        <Text>Current Level : 
          <Text style={{color:'red'}}>35</Text>
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.centerContent}>
        <Text style={styles.todaysDeliveryText}>Today's Delivery</Text>
        <View style={styles.clientCard}>
          <Text style={{color: 'white', fontWeight: '700'}}>Client Name</Text>
          <TouchableOpacity  onPress={() => navigate('DriverOrder')} style={styles.startDeliveryBtn}>
            <Text>Start Delivery</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.leaderboardText}>Driver Leaderboard</Text>
        {driversData.map((driver, index) => (
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
    </View>
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
  },
  centerContent: {
    alignItems: 'center',
    flexGrow: 1, // This will make the content center vertically
    padding: 20,
  },
  todaysDeliveryText: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start', // Align content to the left
    // color: 'white',
  },
  clientCard: {
    backgroundColor: '#fa4b0c',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 24,
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leaderboardText: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start', // Align content to the left
  },
  driverCard: {
    backgroundColor: '#fa4b0c',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
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
});

export default DriverHome;

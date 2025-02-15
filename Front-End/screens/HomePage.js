/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  BackHandler,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomeStyles} from '../style_sheets/StylesSheet';

const popDelivery = [
  {
    id: 1,
    title: 'Delevery Services',
    description: 'Secure, Reliable',
    thumbnail: require('../assets/images/popular_service.jpg'),
  },
  {
    id: 2,
    title: 'Package Services',
    description: 'Secure, Reliable',
    thumbnail: require('../assets/images/package_service.jpg'),
  },
];
const expDelivery = [
  {
    id: 1,
    title: 'Express Services',
    description: 'Fast, Efficient, Realible',
    thumbnail: require('../assets/images/express_delivery.jpg'),
  },
  {
    id: 2,
    title: 'Package Express',
    description: 'Fast, Efficient, Realible',
    thumbnail: require('../assets/images/express_package.jpg'),
  },
];
const NUM_COLUMNS = 2;
const HomePage = ({navigation}) => {
  const [confirmExit, setConfirmExit] = useState(false);

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

  const {navigate} = useNavigation();

  return (
    <View style={HomeStyles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 30, fontWeight: '800', color: 'black'}}>
            Speed
          </Text>
          <Text style={{fontSize: 30, fontWeight: '800', color: '#fa4a0c'}}>
            X
          </Text>
        </View>
      </View>

      {/* Popular Delivery Section */}
      <View style={HomeStyles.bestSellersContainer}>
        <Text style={[HomeStyles.h2, {marginTop: 10}]}>Popular Delivery</Text>
        <FlatList
          data={popDelivery}
          numColumns={NUM_COLUMNS} 
          renderItem={({item}) => (
            <TouchableOpacity
              style={HomeStyles.card}
              onPress={() => navigate('DeliveryForm', {title: item.title})}>
              <Image style={HomeStyles.thumbnail} source={item.thumbnail} />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{fontSize: 15, marginTop: 6,color:'black'}}>
                {item.title}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 3,
                }}>
                <Text style={{fontWeight: '700',color:'black'}}> {item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()} 
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={HomeStyles.bestSellersContainer}>
        <Text style={HomeStyles.h2}>Express Delivery</Text>
        <FlatList
          data={expDelivery}
          numColumns={NUM_COLUMNS}
          renderItem={({item}) => (
            <TouchableOpacity
              style={HomeStyles.card}
              onPress={() => navigate('DeliveryForm', {title: item.title})}>
              <Image style={HomeStyles.thumbnail} source={item.thumbnail} />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{fontSize: 15, marginTop: 6,color:'black'}}>
                {item.title}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 3,
                  
                }}>
                <Text style={{fontWeight: '700',color:'black'}}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()} 
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomePage;

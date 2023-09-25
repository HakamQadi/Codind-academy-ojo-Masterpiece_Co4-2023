/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
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
  // {
  //   id: 3,
  //   title: 'iPhone X',
  //   description:
  //     'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
  //   price: 899,
  //   discountPercentage: 17.94,
  //   rating: 4.44,
  //   stock: 34,
  //   brand: 'Apple',
  //   category: 'smartphones',
  //   thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
  //   images: [
  //     'https://i.dummyjson.com/data/products/2/1.jpg',
  //     'https://i.dummyjson.com/data/products/2/2.jpg',
  //     'https://i.dummyjson.com/data/products/2/3.jpg',
  //     'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
  //   ],
  // },
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
  const {navigate} = useNavigation();

  return (
    <View style={HomeStyles.container}>
      {/* Header Section */}
      <View
        style={{
          // backgroundColor:'yellow',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        {/* Replace this with your app logo */}
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
          numColumns={NUM_COLUMNS} // Set the number of columns
          renderItem={({item}) => (
            <TouchableOpacity
              style={HomeStyles.card}
              onPress={() => navigate('DeliveryForm', {title: item.title})}>
              {/* thumbnail */}
              <Image style={HomeStyles.thumbnail} source={item.thumbnail} />
              {/* title */}
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{fontSize: 15, marginTop: 6}}>
                {item.title}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 3,
                }}>
                {/* Price */}
                <Text style={{fontWeight: '700'}}> {item.description}</Text>
                {/* Ratings */}
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()} // Provide a unique key for each item
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Horizontal Line */}
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          marginTop: 30,
          width: '70%',
          alignSelf: 'center',
        }}
      />

      {/* Express Delivery Section */}
      <View style={HomeStyles.bestSellersContainer}>
        <Text style={HomeStyles.h2}>Express Delivery</Text>
        <FlatList
          data={expDelivery}
          numColumns={NUM_COLUMNS} // Set the number of columns
          renderItem={({item}) => (
            <TouchableOpacity
              style={HomeStyles.card}
              onPress={() => navigate('DeliveryForm', {title: item.title })}>
              {/* thumbnail */}
              <Image style={HomeStyles.thumbnail} source={item.thumbnail} />
              {/* title */}
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{fontSize: 15, marginTop: 6}}>
                {item.title}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 3,
                }}>
                {/* Price */}
                <Text style={{fontWeight: '700'}}>{item.description}</Text>
                {/* Ratings */}
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()} // Provide a unique key for each item
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomePage;

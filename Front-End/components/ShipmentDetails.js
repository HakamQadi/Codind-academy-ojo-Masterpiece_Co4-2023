/* eslint-disable prettier/prettier */
import {View, Text, Button, TextInput, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {FormStyle} from '../style_sheets/StylesSheet';
import {HomeStyles} from '../style_sheets/StylesSheet';

const ShipmentDetails = ({mergedData}) => {
  const popDelivery = [
    {
      id: 1,
      title: 'Small',
      thumbnail: require('../assets/images/popular_service.jpg'),
    },
    {
      id: 2,
      title: 'Medium',
      thumbnail: require('../assets/images/package_service.jpg'),
    },
    {
      id: 3,
      title: 'Large',
      thumbnail: require('../assets/images/package_service.jpg'),
    },
  ];
  return (
    <View style={FormStyle.container}>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={[FormStyle.input, {width: '40%', marginRight: 10}]}
          placeholder="Address"
          placeholderTextColor={FormStyle.placeholderColor.color}
          // value={receivingData.address}
          // onChangeText={text => handleChange('address', text)}
        />
        <TextInput
          style={[FormStyle.input, {width: '40%'}]}
          placeholder="Address Details"
          placeholderTextColor={FormStyle.placeholderColor.color}
          // value={receivingData.addressDetails}
          // onChangeText={text => handleChange('addressDetails', text)}
        />
        <view>
          <FlatList
            data={popDelivery}
            numColumns={3} // Set the number of columns
            renderItem={({item}) => (
              <TouchableOpacity
                style={HomeStyles.card}
                onPress={() => navigate('ProductDetails', {item})}>
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
                  }}></View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()} // Provide a unique key for each item
            showsVerticalScrollIndicator={false}
          />
        </view>
      </View>
    </View>
  );
};

export default ShipmentDetails;

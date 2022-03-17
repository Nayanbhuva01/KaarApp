import {StyleSheet, TouchableOpacity, Image, View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export default function ShoppingKartIcon() {
  const navigation = useNavigation();
  const cartItems = useSelector(state => state);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{cartItems.length}</Text>
      </View>
      <Image source={require('../../assets/Kart.png')} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 29,
    width: 29,
    right: 10,
  },
  itemCountContainer: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#FF7D7D',
    right: 31,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  },
  itemCountText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

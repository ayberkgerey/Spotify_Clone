import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/core';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TabContent() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabContainer}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Foundation name="home" color={'#fff'} size={25} />
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabContainer}
        onPress={() => {
          navigation.navigate('Search');
        }}>
        <AntDesign name="search1" color={'#fff'} size={25} />
        <Text style={styles.tabText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabContainer}
        onPress={() => {
          navigation.navigate('Library');
        }}>
        <MaterialCommunityIcons name="bookshelf" color={'#fff'} size={25} />
        <Text style={styles.tabText}>Your Library</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101010',
    height: 65,
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 2,
    paddingBottom: 10,
  },
  tabText: {
    color: 'white',
    fontSize: 10,
    marginTop: 2,
  },
  tabContainer: {
    width: 80,
    alignItems: 'center',
  },
});

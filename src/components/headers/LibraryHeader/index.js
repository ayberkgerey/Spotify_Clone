import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function LibraryHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.inlineRow}>
        <TouchableOpacity style={styles.avatar}>
          <Image
            source={require('../../../assets/avatar.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.titleStyle}>Your Library</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconRow}>
        <TouchableOpacity>
          <AntDesign
            name="search1"
            color={'white'}
            size={25}
            style={{marginRight: 20}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="plus" color={'white'} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inlineRow: {
    width: '47%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconRow: {
    width: '47%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  avatar: {
    width: 33,
    height: 33,
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  image: {
    width: 33,
    height: 33,
    borderRadius: 100,
  },
  titleStyle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20.5,
  },
});

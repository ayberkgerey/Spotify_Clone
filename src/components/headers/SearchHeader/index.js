import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Search</Text>
      <TouchableOpacity style={styles.inputContainer}>
        <AntDesign name="search1" color={'black'} size={25} />
        <Text style={styles.textStyle}>Artists, songs, or podcasts</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 68,
  },
  titleStyle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 25,
  },
  inputContainer: {
    marginTop: 12,
    marginBottom: 12,
    paddingLeft: 10,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: 45,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: '600',
    paddingLeft: 10,
    color: 'gray',
  },
});

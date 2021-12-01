import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function GoogleLoginButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <AntDesign name={'google'} size={25} color={'white'} />
      <Text style={styles.buttonTitle}>Continue With Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    width: '85%',
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
  },
  buttonTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    paddingLeft: 50,
  },
});

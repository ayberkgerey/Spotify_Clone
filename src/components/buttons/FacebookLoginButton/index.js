import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function FacebookLoginButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <MaterialIcons name={'facebook'} size={30} color={'rgb(15,101,229)'} />
      <Text style={styles.buttonTitle}>Continue With Facebook</Text>
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
    paddingLeft: 36,
  },
});

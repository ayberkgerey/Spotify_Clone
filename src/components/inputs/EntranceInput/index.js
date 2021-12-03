import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

export default function EntranceInput() {
  return (
    <TouchableOpacity style={styles.container}>
      <TextInput style={styles.inputContainer} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '95%',
    backgroundColor: 'gray',
    height: 50,
    justifyContent: 'center',
    borderRadius: 6,
  },
  inputContainer: {
    height: 35,
    paddingLeft: 10,
    color: 'white',
    fontWeight: '700',
  },
});

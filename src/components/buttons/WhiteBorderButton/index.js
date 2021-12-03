import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function WhiteBorderButton() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in without password</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    height: 25,
    borderRadius: 100,
    borderColor: 'gray',
    borderWidth: 1,
  },
  title: {
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
  },
});

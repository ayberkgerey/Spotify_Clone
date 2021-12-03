import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TinyButton(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'gray',
    width: 100,
    height: 40,
    borderRadius: 100,
  },
  title: {
    fontWeight: '500',
  },
});

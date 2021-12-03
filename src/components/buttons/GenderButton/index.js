import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function GenderButton(props) {
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
    marginTop: 30,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
  },
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <Text>Good Evening</Text>
      <View style={styles.iconContainer}>
        <Text>Icon</Text>
        <Text>Icon</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
  },
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function LibraryContainer() {
  return (
    <View style={styles.container}>
      <Text>Library Container</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeHeader from '../../../components/headers/HomeHeader';

export default function HomeContainer() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <Text>Home Container</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

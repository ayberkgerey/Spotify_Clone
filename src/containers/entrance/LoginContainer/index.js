import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BackwardsHeader from '../../../components/headers/BackwardsHeader';

export default function LoginContainer() {
  return (
    <View style={styles.container}>
      <BackwardsHeader />
      <Text style={{color: 'white'}}>LoginContainer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(17, 17, 17)',
  },
});

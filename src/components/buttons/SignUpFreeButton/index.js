import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export default function SignUpFreeButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('SignUp');
      }}>
      <Text style={styles.buttonTitle}>Sign up free</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: '85%',
    height: 35,
    backgroundColor: 'rgb(1,182,49)',
  },
  buttonTitle: {
    fontWeight: '600',
    fontSize: 14,
  },
});

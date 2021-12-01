import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function SignUpFreeButton() {
  return (
    <TouchableOpacity style={styles.container}>
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

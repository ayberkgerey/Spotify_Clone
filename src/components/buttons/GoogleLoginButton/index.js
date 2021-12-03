import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/core';

export default function GoogleLoginButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('Tab');
      }}>
      <AntDesign name={'google'} size={25} color={'white'} />
      <Text style={styles.buttonTitle}>Continue With Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    width: '85%',
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
  },
  buttonTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    paddingLeft: 50,
  },
});

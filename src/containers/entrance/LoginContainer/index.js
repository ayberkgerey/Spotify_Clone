import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BackwardsHeader from '../../../components/headers/BackwardsHeader';
import EntranceInput from '../../../components/inputs/EntranceInput';
import {TinyButton, WhiteBorderButton} from '../../../components/buttons';
import {useNavigation} from '@react-navigation/core';

export default function LoginContainer() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <BackwardsHeader />
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Email or username</Text>
        <EntranceInput />
        <Text style={styles.title}>Password</Text>
        <EntranceInput />
      </View>
      <TouchableOpacity>
        <TinyButton title={'Log in'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LoginWithoutPassword');
        }}>
        <WhiteBorderButton />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(17, 17, 17)',
  },
  title: {
    paddingLeft: 10,
    color: 'white',
    fontSize: 23,
    fontWeight: '700',
    marginTop: 25,
    marginBottom: 2,
  },
  tinyButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'gray',
    width: 100,
    height: 40,
    borderRadius: 100,
  },
  tinyTitle: {
    fontWeight: '500',
  },
});

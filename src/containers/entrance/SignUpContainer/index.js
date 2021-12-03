import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BackwardsHeader from '../../../components/headers/BackwardsHeader';
import EntranceInput from '../../../components/inputs/EntranceInput';
import {TinyButton, WhiteBorderButton} from '../../../components/buttons';
import {useNavigation} from '@react-navigation/core';

export default function SignUpContainer() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BackwardsHeader />
      <View style={styles.inputContainer}>
        <Text style={styles.title}>What's your email?</Text>
        <EntranceInput />
        <Text
          style={{color: 'white', fontSize: 11, paddingLeft: 10, marginTop: 5}}>
          You'll need to confirm this email later.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Password');
        }}>
        <TinyButton title={'Next'} />
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
    marginBottom: 10,
  },
  inputContainer: {
    marginTop: 40,
  },
});

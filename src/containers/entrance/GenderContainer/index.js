import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import BackwardsHeader from '../../../components/headers/BackwardsHeader';
import {GenderButton, TinyButton} from '../../../components/buttons';
import {useNavigation} from '@react-navigation/core';

export default function GenderContainer() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <BackwardsHeader />
      <Text style={styles.title}>What's your gender?</Text>
      <View style={styles.rowContainer}>
        <TouchableOpacity>
          <GenderButton title={'Female'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <GenderButton title={'Male'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <GenderButton title={'Non-binary'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(17, 17, 17)',
  },
  title: {
    paddingLeft: 15,
    color: 'white',
    fontSize: 23,
    fontWeight: '700',
    marginTop: 50,
  },
  inputContainer: {
    marginTop: 40,
  },
  rowContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
});

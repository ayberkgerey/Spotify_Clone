import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import BackwardsHeader from '../../../components/headers/BackwardsHeader';
import DatePicker from 'react-native-date-picker';
import {TinyButton} from '../../../components/buttons';
import {useNavigation} from '@react-navigation/core';

export default function BirthDateContainer() {
  const [date, setDate] = useState(new Date());
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <BackwardsHeader />
      <Text style={styles.title}>What's your date of birth?</Text>
      <DatePicker
        date={date}
        mode={'date'}
        textColor={'white'}
        style={{alignSelf: 'center'}}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Gender');
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
    paddingLeft: 15,
    color: 'white',
    fontSize: 23,
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 10,
  },
  inputContainer: {
    marginTop: 40,
  },
});

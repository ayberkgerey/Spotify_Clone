import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  FacebookLoginButton,
  GoogleLoginButton,
  SignUpFreeButton,
} from '../../../components/buttons';
import {useNavigation} from '@react-navigation/core';

export default function IntroductionContainer() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Entypo
        name={'spotify'}
        size={50}
        color={'white'}
        style={{marginBottom: 15}}
      />
      <Text style={styles.title}>Millions of songs.</Text>
      <Text style={styles.bottomTitle}>Free on Spotify</Text>
      <SignUpFreeButton />
      <GoogleLoginButton />
      <FacebookLoginButton />
      <TouchableOpacity
        style={{marginTop: 10}}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgb(17, 17, 17)',
    paddingBottom: '15%',
  },
  title: {
    color: 'white',
    fontWeight: '800',
    fontSize: 28,
    marginTop: 3,
  },
  bottomTitle: {
    color: 'white',
    fontWeight: '800',
    fontSize: 28,
    marginBottom: '15%',
  },
  loginText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 15,
    marginTop: 5,
  },
});

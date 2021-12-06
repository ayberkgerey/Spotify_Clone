import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GenreCard from '../../cards/GenreCard';

export default function TopGenre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your top genres</Text>
      <View style={styles.gridContainer}>
        <View style={styles.inlineRow}>
          <GenreCard color={"'rgb(201,0,35)'"} title={'Rock'} />
          <GenreCard color={"'rgb(110,73,141)'"} title={'Pop'} />
        </View>
        <View style={styles.inlineRow}>
          <GenreCard color={"'rgb(22,33,76)'"} title={'Folk Acoustic'} />
          <GenreCard color={"'rgb(156,67,9)'"} title={'Indian Pop'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  title: {
    margin: 10,
    color: 'white',
    fontWeight: '700',
  },
  inlineRow: {
    marginTop: 13,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

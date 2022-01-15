import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import YourShowsCard from '../../cards/YourShowsCard';
import PopularArtistsCard from '../../cards/PopularArtistsCard';

export default function PopularArtistsShowcase() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Artists</Text>
      <ScrollView horizontal={true}>
        <PopularArtistsCard color={'red'} title={'UZI'} />
        <PopularArtistsCard color={'yellow'} title={'Ezhel'} />
        <PopularArtistsCard color={'green'} title={'Duman'} />
        <PopularArtistsCard color={'pink'} title={'Lvbel C5'} />
        <PopularArtistsCard color={'blue'} title={'Batuflex'} />
        <PopularArtistsCard color={'cyan'} title={'cakal'} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  title: {
    fontSize: 19,
    fontWeight: '700',
    color: 'white',
    marginLeft: 13,
  },
});

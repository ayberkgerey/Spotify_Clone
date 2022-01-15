import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import YourShowsCard from '../../cards/YourShowsCard';

export default function YourPlaylistsShowcase() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Playlists</Text>
      <ScrollView horizontal={true}>
        <YourShowsCard color={'orange'} title={'Anadolu Rock'} />
        <YourShowsCard color={'purple'} title={'New Bordeaux'} />
        <YourShowsCard color={'blue'} title={'Acoustic'} />
        <YourShowsCard color={'pink'} title={'Greek Tavern'} />
        <YourShowsCard color={'yellow'} title={'French Rap'} />
        <YourShowsCard color={'green'} title={'Rap'} />
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

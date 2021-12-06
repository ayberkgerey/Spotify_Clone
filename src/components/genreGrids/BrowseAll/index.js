import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GenreCard from '../../cards/GenreCard';

export default function BrowseAll() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse all</Text>
      <View style={styles.gridContainer}>
        <View style={styles.inlineRow}>
          <GenreCard title={'Podcasts'} color={'orange'} />
          <GenreCard title={'Made for you'} color={"'rgb(22,33,76)'"} />
        </View>
        <View style={styles.inlineRow}>
          <GenreCard title={'Charts'} color={'purple'} />
          <GenreCard title={'New releases'} color={"'rgb(180,0,62)'"} />
        </View>
        <View style={styles.inlineRow}>
          <GenreCard title={'Radio'} color={'green'} />
          <GenreCard title={'Discover'} color={'cyan'} />
        </View>
        <View style={styles.inlineRow}>
          <GenreCard title={'Concerts'} color={'blue'} />
          <GenreCard title={'Summer'} color={'pink'} />
        </View>
        <View style={styles.inlineRow}>
          <GenreCard title={'Mood'} color={'red'} />
          <GenreCard title={'Decades'} color={"'rgb(22,33,76)'"} />
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
  gridContainer: {},
  inlineRow: {
    marginTop: 13,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

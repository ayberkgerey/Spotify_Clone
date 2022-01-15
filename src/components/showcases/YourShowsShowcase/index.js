import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import YourShowsCard from '../../cards/YourShowsCard';

export default function YourShowsShowcase() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your shows</Text>
      <ScrollView horizontal={true}>
        <YourShowsCard color={'orange'} title={'Podcastia Maceraları'} />
        <YourShowsCard color={'purple'} title={'Bir Elit Bilim İnsanı'} />
        <YourShowsCard color={'blue'} title={'Motivasyon Konuşmaları'} />
        <YourShowsCard color={'pink'} title={'Speech On Economics'} />
        <YourShowsCard color={'yellow'} title={'French Class'} />
        <YourShowsCard color={'green'} title={'İlber Ortaylı'} />
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

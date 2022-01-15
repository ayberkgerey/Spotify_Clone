import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import YourShowsCard from '../../cards/YourShowsCard';

export default function MadeForYouShowcase() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Made For You</Text>
      <ScrollView horizontal={true}>
        <YourShowsCard
          color={'orange'}
          title={'Ece Seçkin, Berkay, Nilüfer and more'}
        />
        <YourShowsCard
          color={'purple'}
          title={'Kıraç, Haluk Levent and more'}
        />
        <YourShowsCard
          color={'blue'}
          title={'Edin Nala, Jana, Dragana Mirkovic and more'}
        />
        <YourShowsCard
          color={'pink'}
          title={'Christos Nikolopoulos, Ilias Kampakakis and more'}
        />
        <YourShowsCard
          color={'yellow'}
          title={'Metallica, Led Zeppelin, Santana and more '}
        />
        <YourShowsCard
          color={'green'}
          title={'Killa Hakan, Ceza, Sagopa Kajmer and more'}
        />
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

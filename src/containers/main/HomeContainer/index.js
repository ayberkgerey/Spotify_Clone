import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HomeHeader from '../../../components/headers/HomeHeader';
import LinearGradient from 'react-native-linear-gradient';
import HomeTopShowcase from '../../../components/showcases/HomeTopShowcase';
import {YourShowsShowcase} from '../../../components/showcases';
import MadeForYouShowcase from '../../../components/showcases/MadeForYouShowcase';
import YourPlaylistsShowcase from '../../../components/showcases/YourPlaylistsShowcase';
import PopularArtistsCard from '../../../components/cards/PopularArtistsCard';
import PopularArtistsShowcase from '../../../components/showcases/PopularArtistsShowcase';

export default function HomeContainer() {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[
        'rgb(51, 65, 65)',
        'rgb(40, 40, 40)',
        'rgb(25, 25, 25)',
        'rgb(20, 20, 20)',
        'rgb(17, 17, 17)',
        'rgb(13, 13, 13)',
      ]}
      style={styles.container}>
      <ScrollView>
        <HomeHeader />
        <HomeTopShowcase />
        <YourShowsShowcase />
        <PopularArtistsShowcase />
        <MadeForYouShowcase />
        <YourPlaylistsShowcase />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(17, 17, 17)',
  },
});

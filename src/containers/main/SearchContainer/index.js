import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import SearchHeader from '../../../components/headers/SearchHeader';
import TopGenre from '../../../components/genreGrids/TopGenre';
import BrowseAll from '../../../components/genreGrids/BrowseAll';

export default function SearchContainer() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SearchHeader />
        <TopGenre />
        <BrowseAll />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(15,15,15)',
  },
});

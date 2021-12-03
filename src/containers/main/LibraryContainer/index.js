import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import LibraryHeader from '../../../components/headers/LibraryHeader';
import LibraryTopShowcase from '../../../components/showcases/LibraryTopShowcase';
import RecentlyPlayedLibraryShowcase from '../../../components/showcases/RecentlyPlayedLibraryShowcase';

export default function LibraryContainer() {
  return (
    <View style={styles.container}>
      <LibraryHeader />
      <ScrollView>
        <LibraryTopShowcase />
        <View style={styles.splitLine} />
        <RecentlyPlayedLibraryShowcase />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(15,15,15)',
  },
  splitLine: {
    marginTop: 10,
    width: '98%',
    borderWidth: 1,
  },
});

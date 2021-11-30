import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import LibraryHeader from '../../../components/headers/LibraryHeader';
import LibraryTopShowcase from '../../../components/showcases/LibraryTopShowcase';

export default function LibraryContainer() {
  return (
    <View style={styles.container}>
      <LibraryHeader />
      <ScrollView>
        <LibraryTopShowcase />
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

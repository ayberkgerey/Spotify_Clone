import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function RecentlyPlayedLibraryShowcase() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Icon</Text>
        <Text style={styles.title}>Recently Played</Text>
      </View>
      <View>
        <Text>Icon</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    color: 'white',
  },
});

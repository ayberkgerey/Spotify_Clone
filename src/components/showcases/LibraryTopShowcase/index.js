import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function LibraryTopShowcase() {
  return (
    <ScrollView horizontal={true} style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textStyle}>Playlists</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textStyle}>Artists</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textStyle}>Albums</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textStyle}>Podcasts & Shows</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textStyle}>Downloaded</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'gray',
    height: 30,
    marginTop: 5,
    marginLeft: 12,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 13,
  },
});

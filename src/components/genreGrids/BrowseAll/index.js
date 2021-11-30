import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function BrowseAll() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse all</Text>
      <View style={styles.gridContainer}>
        <View style={styles.inlineRow}>
          <TouchableOpacity style={styles.cardContainer1}>
            <Text style={styles.cardTitle}>Podcasts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardContainer2}>
            <Text style={styles.cardTitle}>Made for you</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inlineRow}>
          <TouchableOpacity style={styles.cardContainer3}>
            <Text style={styles.cardTitle}>Charts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardContainer4}>
            <Text style={styles.cardTitle}>New releases</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inlineRow}>
          <TouchableOpacity style={styles.cardContainer5}>
            <Text style={styles.cardTitle}>Radio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardContainer6}>
            <Text style={styles.cardTitle}>Discover</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inlineRow}>
          <TouchableOpacity style={styles.cardContainer7}>
            <Text style={styles.cardTitle}>Concerts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardContainer8}>
            <Text style={styles.cardTitle}>Summer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inlineRow}>
          <TouchableOpacity style={styles.cardContainer9}>
            <Text style={styles.cardTitle}>Mood</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardContainer1}>
            <Text style={styles.cardTitle}>Decades</Text>
          </TouchableOpacity>
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
  cardTitle: {
    color: 'white',
    fontWeight: '600',
  },
  cardContainer1: {
    padding: 8,
    borderRadius: 6,
    width: 180,
    height: 95,
    backgroundColor: 'orange',
  },
  cardContainer2: {
    padding: 8,
    borderRadius: 6,
    width: 180,
    height: 95,
    backgroundColor: 'rgb(22,33,76)',
  },
  cardContainer3: {
    padding: 8,
    borderRadius: 6,
    width: 180,
    height: 95,
    backgroundColor: 'purple',
  },
  cardContainer4: {
    padding: 8,
    borderRadius: 6,
    width: 180,
    height: 95,
    backgroundColor: 'rgb(180,0,62)',
  },
  cardContainer5: {
    padding: 8,
    borderRadius: 6,
    width: 180,
    height: 95,
    backgroundColor: 'green',
  },
  cardContainer6: {
    padding: 8,
    borderRadius: 6,
    width: 180,
    height: 95,
    backgroundColor: 'cyan',
  },
  cardContainer7: {
    padding: 8,
    borderRadius: 6,
    width: 180,
    height: 95,
    backgroundColor: 'blue',
  },
  cardContainer8: {
    padding: 8,
    borderRadius: 6,
    width: 180,
    height: 95,
    backgroundColor: 'pink',
  },
  cardContainer9: {
    padding: 8,
    borderRadius: 6,
    width: 180,
    height: 95,
    backgroundColor: 'red',
  },
});

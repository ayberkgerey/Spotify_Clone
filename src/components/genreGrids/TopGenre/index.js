import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function TopGenre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your top genres</Text>
      <View style={styles.gridContainer}>
        <View style={styles.inlineRow}>
          <TouchableOpacity style={styles.cardContainer1}>
            <Text style={styles.cardTitle}>Rock</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardContainer2}>
            <Text style={styles.cardTitle}>Pop</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inlineRow}>
          <TouchableOpacity style={styles.cardContainer3}>
            <Text style={styles.cardTitle}>Folk Acoustic</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardContainer4}>
            <Text style={styles.cardTitle}>Indian-Pop</Text>
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
    backgroundColor: 'rgb(201,0,35)',
  },
  cardContainer2: {
    padding: 8,
    borderRadius: 6,
    width: 180,
    height: 95,
    backgroundColor: 'rgb(110,73,141)',
  },
  cardContainer3: {
    padding: 8,
    borderRadius: 6,
    width: 180,
    height: 95,
    backgroundColor: 'rgb(22,33,76)',
  },
  cardContainer4: {
    padding: 8,
    borderRadius: 6,
    width: 180,
    height: 95,
    backgroundColor: 'rgb(156,67,9)',
  },
});

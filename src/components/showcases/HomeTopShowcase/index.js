import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function HomeTopShowcase() {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.card}>
          <View style={styles.imageBox1} />
          <Text style={styles.title}>Rock</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.imageBox2} />
          <Text style={styles.title}>Pop</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.card}>
          <View style={styles.imageBox3} />
          <Text style={styles.title}>Sad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.imageBox4} />
          <Text style={styles.title}>Chill</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.card}>
          <View style={styles.imageBox5} />
          <Text style={styles.title}>Folk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.imageBox6} />
          <Text style={styles.title}>Happy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    marginTop: 10,
    flexDirection: 'row',
    width: '48%',
    backgroundColor: 'rgb(37,42,41)',
    height: 58,
    borderRadius: 4,
    alignItems: 'center',
  },
  imageBox1: {
    width: '35%',
    height: '100%',
    backgroundColor: 'orange',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  imageBox2: {
    width: '35%',
    height: '100%',
    backgroundColor: 'red',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  imageBox3: {
    width: '35%',
    height: '100%',
    backgroundColor: 'darkblue',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  imageBox4: {
    width: '35%',
    height: '100%',
    backgroundColor: 'cyan',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  imageBox5: {
    width: '35%',
    height: '100%',
    backgroundColor: 'purple',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  imageBox6: {
    width: '35%',
    height: '100%',
    backgroundColor: 'pink',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  title: {
    color: 'white',
    marginLeft: '5%',
    fontWeight: '500',
  },
});

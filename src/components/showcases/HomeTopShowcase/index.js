import React from 'react';
import {View, StyleSheet} from 'react-native';
import TopShowcaseCard from '../../cards/TopShowcaseCard';

export default function HomeTopShowcase() {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TopShowcaseCard title={'Rock'} color={'orange'} />
        <TopShowcaseCard title={'Pop'} color={'red'} />
      </View>
      <View style={styles.rowContainer}>
        <TopShowcaseCard title={'Sad'} color={'darkblue'} />
        <TopShowcaseCard title={'Chill'} color={'cyan'} />
      </View>
      <View style={styles.rowContainer}>
        <TopShowcaseCard title={'Folk'} color={'purple'} />
        <TopShowcaseCard title={'Happy'} color={'pink'} />
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
});

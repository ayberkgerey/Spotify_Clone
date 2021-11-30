import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function HomeHeader() {
  const niceWord = () => {
    const time = new Date().getHours();
    console.log(time);
    if (time < 6) {
      return 'Good night';
    }
    if (time >= 6 && time < 12) {
      return 'Good morning';
    }
    if (time >= 12 && time < 17) {
      return 'Good afternoon';
    }
    if (time >= 18 && time < 24) {
      return 'Good evening';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{niceWord()}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <SimpleLineIcons name={'bell'} size={23} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <SimpleLineIcons name={'reload'} size={23} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <SimpleLineIcons name={'settings'} size={23} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 5,
    marginTop: 55,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 130,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  titleStyle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 21,
  },
});

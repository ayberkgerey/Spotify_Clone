import React from 'react';
import {View, Text} from 'react-native';

export default function PopularArtistsCard(props) {
  const container = {
    margin: 12,
    width: 150,
    height: 150,
    backgroundColor: props.color,
    borderRadius: 90,
  };
  const cardText = {
    fontWeight: '500',
    numberOfLines: 2,
    color: 'white',
    fontSize: 12,
  };

  return (
    <View style={{width: 170, alignItems: 'center'}}>
      <View style={container} />
      <Text style={cardText}>{props.title}</Text>
    </View>
  );
}

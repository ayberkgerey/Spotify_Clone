import React from 'react';
import {View, Text} from 'react-native';

export default function YourShowsCard(props) {
  const container = {
    margin: 12,
    width: 150,
    height: 150,
    backgroundColor: props.color,
  };
  const cardText = {
    fontWeight: '500',
    numberOfLines: 2,
    marginLeft: 12,
    color: 'white',
    fontSize: 12,
  };

  return (
    <View style={{width: 170}}>
      <View style={container} />
      <Text style={cardText}>{props.title}</Text>
    </View>
  );
}

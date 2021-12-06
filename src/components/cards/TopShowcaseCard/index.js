import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

export default function TopShowcaseCard(props) {
  const card = {
    marginTop: 10,
    flexDirection: 'row',
    width: '48%',
    backgroundColor: 'rgb(37,42,41)',
    height: 58,
    borderRadius: 4,
    alignItems: 'center',
  };
  const imageBox = {
    width: '35%',
    height: '100%',
    backgroundColor: props.color,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  };
  const title = {
    color: 'white',
    marginLeft: '5%',
    fontWeight: '500',
  };

  return (
    <TouchableOpacity style={card}>
      <View style={imageBox} />
      <Text style={title}>{props.title}</Text>
    </TouchableOpacity>
  );
}

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default function GenreCard(props) {
  const container = {
    backgroundColor: props.color,
    padding: 8,
    borderRadius: 6,
    width: 180,
    height: 95,
  };
  return (
    <TouchableOpacity style={container}>
      <Text style={{color: 'white', fontWeight: '600'}}>{props.title}</Text>
    </TouchableOpacity>
  );
}

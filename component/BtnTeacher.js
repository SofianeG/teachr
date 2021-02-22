import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function BtnAdd({title, backgroundColor, color, borderColor, style}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        {
          backgroundColor,
          borderColor,
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
        },
        style,
      ]}>
      <Text style={{color}}>{title}</Text>
    </TouchableOpacity>
  );
}

export default BtnAdd;

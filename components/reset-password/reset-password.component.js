import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { View, Text, Button, TouchableOpacity } from 'react-native';

const style = {
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  resetInputs: {
    width: 200,
    padding: 3,
  },
  resetButton: {
    backgroundColor: 'darkorange',
    borderRadius: 5,
    padding: 15,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetText: {
    color: 'white',
    fontSize: 15,
  }
};

export default ({ onReset }) => (
  <View style={style.centerContent}>
    <TextInput style={style.resetInputs} placeholder="Username"/>
    <TouchableOpacity
      onPress={onReset}
      style={style.resetButton}
    >
      <Text
        style={style.resetText}
      >
        Reset Passwortd
      </Text>
    </TouchableOpacity>
  </View>
);

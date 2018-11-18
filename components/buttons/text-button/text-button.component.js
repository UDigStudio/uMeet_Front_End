import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { BLACK } from '../../../utils/colors';

const TextButton = (props) => (
  <TouchableOpacity 
    onPress={props.action} 
    disabled={props.disabled}
  >
    <View style={props.disabled ? styles.buttonDisabled : styles.button}>
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    borderColor: BLACK,
    borderWidth: 1,
    borderRadius: 4,
    width: 150,
    padding: 5,
    alignItems: 'center'
  },
  buttonDisabled: {
    borderColor: BLACK,
    borderWidth: 1,
    borderRadius: 4,
    width: 150,
    padding: 5,
    alignItems: 'center',
    opacity: 0.5
  }
});

export default TextButton;
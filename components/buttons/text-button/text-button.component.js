import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BLACK } from '../../../utils/colors';

const TextButton = (props) => (
  <TouchableOpacity 
    onPress={props.action} 
    style={styles.button}
  >
    <Text>{props.text}</Text>
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
  }
});

export default TextButton;
import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { BLACK } from '../../../utils/colors';

const StandardInput = (props) => (
  <TextInput 
    onChangeText={props.action}
    value={props.value}
    style={styles.textInput}
  />
)

const styles = StyleSheet.create({
  textInput: {
    width: 300,
    borderColor: BLACK,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

export default StandardInput;
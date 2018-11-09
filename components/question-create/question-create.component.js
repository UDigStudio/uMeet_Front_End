import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextInput, StyleSheet } from 'react-native';

class QuestionCreate extends Component {
  render() {
    return (
      <View>
        <TextInput />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default QuestionCreate;
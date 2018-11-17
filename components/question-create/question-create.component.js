import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextInput, StyleSheet } from 'react-native';
import TextButton from '../buttons/text-button/text-button.component';
import StandardInput from '../inputs/standard-input/standard-input.component';

class QuestionCreate extends Component {
  state = {
    question: null
  }
  createQuestion() {
    
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <StandardInput 
            action={(question) => this.setState({question})}
            value={this.state.question}
          />
        </View>
        <TextButton 
          text={'Add Question'}
          action={() => this.createQuestion()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    marginBottom: 20
  }
});

export default QuestionCreate;
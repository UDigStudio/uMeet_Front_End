// @flow

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextInput, StyleSheet } from 'react-native';
import TextButton from '../buttons/text-button/text-button.component';
import StandardInput from '../inputs/standard-input/standard-input.component';
import { createQuestion } from '../../services/questions.service'
import { connect } from 'react-redux';

//TODO: Click a button and store a record

class QuestionCreate extends Component {
  state = {
    question: ''
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
          action={() => this.props.handleSaveQuestion(this.state.question, this.props.navigation)}
          disabled={this.state.question.length > 0 ? false : true}
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

const mapDispatchToProps = (dispatch: Function) => ({
  handleSaveQuestion: (question, navigation) => dispatch(createQuestion(question, navigation))
})

export default connect(null, mapDispatchToProps)(QuestionCreate);
// @flow

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextInput, StyleSheet } from 'react-native';
import TextButton from '../buttons/text-button/text-button.component';
import StandardInput from '../inputs/standard-input/standard-input.component';
import { createQuestion } from '../../services/questions.service'
import { connect } from 'react-redux';
import Error from '../error/error.component';
import Loading from '../loading/loading.component';

class QuestionCreate extends Component {
  state = {
    question: ''
  }
  render() {

    const { handleSaveQuestion, navigation, isLoading, error } = this.props;
    const { question } = this.state;

    if (error) {
      return (
        <Error error={error} />
      )
    } else if (isLoading) {
      return (
        <Loading />
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.input}>
            <StandardInput 
              action={(question) => this.setState({question})}
              value={question}
            />
          </View>
          <TextButton 
            text={'Add Question'}
            action={() => handleSaveQuestion(question, navigation)}
            disabled={question.length > 0 ? false : true}
          />
        </View>
      )
    }
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

const mapStateToProps = (state) => ({
  isLoading: state.questionReducer.isLoading,
  error: state.questionReducer.error
})

const mapDispatchToProps = (dispatch: Function) => ({
  handleSaveQuestion: (question, navigation) => dispatch(createQuestion(question, navigation))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCreate);
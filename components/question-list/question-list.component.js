// @flow

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';
import { WHITE, RED } from '../../utils/colors';
import { getQuestions, activateQuestion, deleteQuestion } from '../../services/questions.service';
import type { Questions } from '../../types/question.type';

/* TODO: Question titles longer than X character should be abbreviated */
/* TODO: Rip the error reporting out into a HOC */
/* TODO: Create a loading component instead of using the message */

class QuestionList extends Component {
  componentDidMount() {
    this.props.handleGetQuestions();
  }
  render() {
    const { questions, error, 
      isLoading, handleDeleteQuestion, 
      handleActivateQuestion } = this.props;

    if(error) {
      return (
        <View style={styles.container}>
            <Text>Something went wrong!</Text>
            <Text>{error.message}</Text>
        </View>
      )
    }
    else if (questions) {
      return (
        <View style={styles.container}>
          {
            questions.map((question) => (
              <Swipeout 
                key={question.id}
                right={[{
                  text: 'Delete',
                  color: WHITE,
                  backgroundColor: RED,
                  onPress: () => handleDeleteQuestion(question.id)
                }]}
              >
                <ListItem
                  title={question.text}
                  onPress={() => handleActivateQuestion(question)} //TODO: This is the bad one
                  rightIcon={question.active && <View style={styles.greenCircle}/>}
                  rightTitle={question.active ? "Active" : ""}
                />
              </Swipeout>
            ))
          }
        </View>
      )
    }
    else {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questionReducer.questions,
    error: state.questionReducer.error
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  handleGetQuestions: () => dispatch(getQuestions()),
  handleActivateQuestion: (question) => dispatch(activateQuestion(question)),
  handleDeleteQuestion: (id) => dispatch(deleteQuestion(id))
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  greenCircle: {
    width: 10,
    height: 10,
    borderRadius: 10/2,
    backgroundColor: '#39FF14',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
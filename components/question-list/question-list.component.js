// @flow

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';
import { WHITE, RED } from '../../utils/colors';
import { getQuestions, activateQuestion, deleteQuestion } from '../../services/questions.service';
import type { Questions } from '../../types/question.type';
import Error from '../error/error.component';
import Loading from '../loading/loading.component';

/* TODO: Question titles longer than X character should be abbreviated */
/* TODO: Investigate performance enhancement by not using arrow functions in mapDispatchToProps */

/* TODO: ISLOADING for each Thunk */ 

class QuestionList extends Component {
  componentDidMount() {
    this.props.handleGetQuestions();
  }
  handleDeleteQuestion(id) {
    return () => this.props.handleDeleteQuestion(id);
  }
  handleActivateQuestion(question) {
    return () => this.props.handleActivateQuestion(question);
  }
  render() {
    const { questions, error, 
      isLoading, handleDeleteQuestion, 
      handleActivateQuestion } = this.props;

    if(error) {
      return (
        <Error error={error} />
      )
    }
    else if (isLoading) {
      return (
        <Loading />
      )
    }
    else {
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
                  onPress: this.handleDeleteQuestion(question.id)
                }]}
              >
                <ListItem
                  title={question.text}
                  onPress={this.handleActivateQuestion(question)}
                  rightIcon={question.active && <View style={styles.greenCircle}/>}
                  rightTitle={question.active ? "Active" : ""}
                />
              </Swipeout>
            ))
          }
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questionReducer.questions,
    error: state.questionReducer.error,
    isLoading: state.questionReducer.isLoading
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
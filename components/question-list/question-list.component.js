// @flow

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { handleDeleteQuestion, handleUpdateActivation } from '../../actions/questions';
import Swipeout from 'react-native-swipeout';
import { WHITE, RED } from '../../utils/colors';
import { getQuestions, activateQuestion } from '../../services/questions.service';

/* TODO: Question titles longer than X character should be abbreviated */
/* TODO: Services breakout */
/* TODO: Flow */

class QuestionList extends Component {
  componentDidMount() {
    this.props.handleGetQuestion();
  }
  handleActivate(question) {
    this.props.handleActivateQuestion(question);
  }
  handleDelete(id) {
    this.props.dispatch(handleDeleteQuestion(id))
  }
  render() {
    const { questions } = this.props;

    return (
      <View style={styles.container}>
        {
          questions
          ? <View>
            {
              Object.keys(questions).map((key, index) => (
                <Swipeout 
                  key={questions[key].id}
                  right={[{
                    text: 'Delete',
                    color: WHITE,
                    backgroundColor: RED,
                    onPress: () => this.handleDelete(questions[key].id)
                  }]}
                >
                  <ListItem
                    title={questions[key].text}
                    onPress={() => this.handleActivate(questions[key])}
                    rightIcon={questions[key].active && <View style={styles.greenCircle}/>}
                    rightTitle={questions[key].active ? "Active" : ""}
                  />
                </Swipeout>
              ))
            }
          </View>
          : <View><Text>Loading...</Text></View>
        }
      </View>
    )
  }
}

const mapStateToProps = ({questions}) => {
  return {
    questions
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  handleGetQuestion: () => dispatch(getQuestions()),
  handleActivateQuestion: (question) => dispatch(activateQuestion(question))
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
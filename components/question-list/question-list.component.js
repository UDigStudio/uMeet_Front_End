import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import { getQuestions } from '../../utils/api';
import { connect } from 'react-redux';
import { handleGetQuestions } from '../../actions/questions';
import QuestionListHeader from '../question-list-header/question-list-header.component';

class QuestionList extends Component {
  state = {
    selectedQuestions: []
  }
  componentDidMount() {
    this.props.dispatch(handleGetQuestions());
  }
  handlePressQuestion(questionId) {

    const { selectedQuestions } = this.state;

    if (selectedQuestions.find(sq => sq === questionId)) {
      this.setState({
        selectedQuestions: selectedQuestions.filter(sq => sq !== questionId)
      });
    } else {
      this.setState({
        selectedQuestions: [
          ...selectedQuestions,
          questionId
        ]
      });
    }
  }

  render() {
    const { questions } = this.props;
    const { selectedQuestions } = this.state

    return (
      <View style={styles.container}>
        {
          questions
          ? <View>
            {
              Object.keys(questions).map((key, index) => (
                <ListItem
                  checkmark={selectedQuestions.includes(questions[key].id)}
                  key={questions[key].id}
                  title={questions[key].text}
                  onPress={this.handlePressQuestion.bind(this, questions[key].id)}
                  rightIcon={questions[key].active && <View style={styles.greenCircle}/>}
                  rightTitle={questions[key].active ? "Active" : ""}
                />
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

export default connect(mapStateToProps)(QuestionList);
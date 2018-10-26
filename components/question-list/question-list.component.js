import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { getQuestions } from '../../utils/api'
import { Ionicons } from '@expo/vector-icons'

//TO-DO: Add redux

class QuestionList extends Component {
  state = {
    questions: [],
    selectedQuestions: []
  }
  componentDidMount() {
    
    const questions = getQuestions();
    
    this.setState({
      questions
    })
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
    const { questions, selectedQuestions } = this.state;

    return (
      <View style={styles.container}>
        {
          questions.map(question => (
            <ListItem
              checkmark={selectedQuestions.includes(question.id)}
              key={question.id}
              title={question.text}
              onPress={this.handlePressQuestion.bind(this, question.id)}
              rightIcon={question.active && <View style={styles.greenCircle}/>}
              rightTitle={question.active ? "Active" : ""}
            />
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  greenCircle: {
    width: 10,
    height: 10,
    borderRadius: 10/2,
    backgroundColor: '#39FF14',
  }
});

export default QuestionList
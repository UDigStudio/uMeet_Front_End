import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';

//TO-DO: Add redux

class QuestionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: props.questions,
      selectedQuestions: []
    }
  }

  handlePressQuestion(questionId) {
    if (this.state.selectedQuestions.find(sq => sq === questionId)) {
      this.setState({
        selectedQuestions: this.state.selectedQuestions.filter(sq => sq !== questionId)
      });
    } else {
      this.setState({
        selectedQuestions: [
          ...this.state.selectedQuestions,
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
              checkmark={selectedQuestions.find(sq => sq === question.id)}
              key={question.id}
              title={question.text}
              onPress={this.handlePressQuestion.bind(this, question.id)}
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
  }
});

export default QuestionList
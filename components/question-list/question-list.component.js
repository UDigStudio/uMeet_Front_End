import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import { getQuestions } from '../../utils/api';
import { connect } from 'react-redux';
import { handleGetQuestions, handleDeleteQuestion, handleUpdateActivation } from '../../actions/questions';
import Swipeout from 'react-native-swipeout';
import { WHITE, RED } from '../../utils/colors';

/* TODO: Question titles longer than X character should be abbreviated */

class QuestionList extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetQuestions());
  }
  handleActivate(question) {
    this.props.dispatch(handleUpdateActivation(question));
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
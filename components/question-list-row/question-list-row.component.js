import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet
} from 'react-native';

class QuestionListRow extends Component {
  render() {

    const { question } = this.props

    return(
      <View style={ styles.container }>
        <Text style={ styles.text }>
          { question.text }
        </Text>
        { question.active &&
          <View style={ styles.greenCircle } />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    marginBottom: 10
  },
  greenCircle: {
    width: 10,
    height: 10,
    borderRadius: 10/2,
    backgroundColor: '#39FF14',
  },
  text: {
    marginRight: 10
  }
});

export default QuestionListRow
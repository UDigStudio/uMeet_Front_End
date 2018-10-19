import React, { Component }  from 'react';
import { 
  View, 
  Text,
  StyleSheet
} from 'react-native';
import {
  List,
  ListItem
} from 'react-native-elements';

//TO-DO: Add redux

class QuestionList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <List>
          {
            this.props.questions.map((question) => (
              <ListItem 
                key={question.id}
                title={question.text} 
              />
            ))
          }
        </List>
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
import React, { Component }  from 'react';
import { 
  FlatList,
  View
} from 'react-native';
import QuestionListRow from '../question-list-row/question-list-row.component';

class QuestionList extends Component {
  handlePress = () => {
    //Take the user to the corresponding
    //manage question component
  }
  keyExtractor = ( question, index ) => question.id;
  render() {

    const { questions } = this.props

    return (
      <View>
        { questions && 
            <FlatList 
              data={ questions }
              keyExtractor={ this.keyExtractor }
              renderItem={ ({ item }) => <QuestionListRow question={item} /> }
            />
        }
      </View>
    )
  }
}

export default QuestionList
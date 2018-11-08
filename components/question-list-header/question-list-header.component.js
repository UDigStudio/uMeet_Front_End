import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

/* Header for the top-left of the question list screen */
class QuestionListHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
            <FontAwesome 
              name="plus" 
              size={30} 
            />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20
  }
});

export default QuestionListHeader
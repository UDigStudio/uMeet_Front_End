import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class QuestionListHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity>
            <FontAwesome 
              name="plus" 
              size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.minus}>
          <TouchableOpacity>
            <FontAwesome 
              name="minus" 
              size={30} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 80
  },
  minus: {
    paddingLeft: 50
  }
});

export default QuestionListHeader
import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const QuestionCreateButton = (props) => {
  const handlePress = () => {
    props.navigation.navigate('QuestionCreate');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => handlePress()}>
          <FontAwesome 
            name="plus" 
            size={30} 
          />
          <Text style={styles.text}>Add Question</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginLeft: 10
  }
});

export default withNavigation(QuestionCreateButton);
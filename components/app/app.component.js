import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../reducers';
import QuestionList from '../question-list/question-list.component';
import middleware from '../../middleware';

const MainNavigator = createStackNavigator({
  Home: { 
    screen: QuestionList
  }
},{
  initialRouteName: 'Home'
});

const App = () => (
  <Provider store={createStore(reducer, middleware)}>
    <View style={styles.container}>
      <MainNavigator />
    </View>
  </Provider>
)
  
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
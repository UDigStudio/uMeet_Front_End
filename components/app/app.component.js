import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../reducers';
import QuestionList from '../question-list/question-list.component';
import middleware from '../../middleware';
import QuestionCreate from '../question-create/question-create.component';
import { FontAwesome } from '@expo/vector-icons';
import QuestionCreateButton from '../question-create-button/question-create-button.component';

const Tabs = createBottomTabNavigator({
  QuestionList: {
    screen: QuestionList,
    navigationOptions: {
      tabBarLabel: 'Manage Questions',
      tabBarIcon: <FontAwesome name="list" size={30} />,
    }
  }
})

const MainNavigator = createStackNavigator({
  Home: { 
    screen: Tabs,
    navigationOptions: { 
      headerLeft: (
        <QuestionCreateButton />
      )
    }
  },
  QuestionCreate: {
    screen: QuestionCreate
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
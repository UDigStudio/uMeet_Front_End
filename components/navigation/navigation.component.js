//@flow

import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import QuestionList from '../question-list/question-list.component';
import QuestionCreate from '../question-create/question-create.component';
import QuestionCreateButton from '../question-create-button/question-create-button.component';
import Login from '../login/login.component';

const stackNavigator = createStackNavigator({
  QuestionList: { 
    screen: QuestionList,
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
  initialRouteName: 'QuestionList'
});

const MainNavigator = createBottomTabNavigator({
  StackNavigator: {
    screen: stackNavigator,
    navigationOptions: {
      tabBarLabel: 'Manage Questions',
      tabBarIcon: <FontAwesome name="list" size={30} />,
    }
  }
})

const Navigation = ({ loggedIn }) => (

  <View style={styles.container}>
    {true 
      ? <MainNavigator />
      : <Login />
    }
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = (dispatch: Function) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
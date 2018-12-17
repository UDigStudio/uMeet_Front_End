import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { View, Text, Button, TouchableOpacity } from 'react-native';

//WIP: Do not code review yet

const style = {
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  loginInputs: {
    width: 200,
    padding: 3,
  },
  loginButton: {
    backgroundColor: 'darkorange',
    borderRadius: 5,
    padding: 15,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: 15,
  }
};

export default ({ onLogin, onResetPassword }) => (
  <View style={style.centerContent}>
    <TextInput style={style.loginInputs} placeholder="Username"/>
    <TextInput style={style.loginInputs} placeholder="Password" secureTextEntry={true}/>
    <TouchableOpacity
      onPress={onLogin}
      style={style.loginButton}
    >
      <Text
        style={style.loginText}
      >
        Log In
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={onResetPassword}
    >
      <Text>
        Reset password
      </Text>
    </TouchableOpacity>
  </View>
);

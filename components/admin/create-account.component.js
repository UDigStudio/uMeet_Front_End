import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { View, Text, Button, TouchableOpacity } from 'react-native';

const style = {
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  createAccountInputs: {
    width: 200,
    padding: 3,
  },
  createAccountButton: {
    backgroundColor: 'darkorange',
    borderRadius: 5,
    padding: 15,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountText: {
    color: 'white',
    fontSize: 15,
  }
};

export default ({ onCreateAccount }) => (
  <View style={style.centerContent}>
    <TextInput style={style.createAccountInputs} placeholder="Email" keyboardType="email-address"/>
    <TextInput style={style.createAccountInputs} placeholder="Password" secureTextEntry={true}/>
    <TouchableOpacity
      onPress={onCreateAccount}
      style={style.createAccountButton}
    >
      <Text
        style={style.createAccountText}
      >
        Create Account
      </Text>
    </TouchableOpacity>
  </View>
);

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Error = (props) => (
  <View style={styles.container}>
    <Text>Something went wrong!</Text>
    <Text>{props.error.message}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Error;
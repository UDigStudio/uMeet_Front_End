import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Loading = () => (
  <View style={styles.container}>
    <Text>Loading...</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Loading;
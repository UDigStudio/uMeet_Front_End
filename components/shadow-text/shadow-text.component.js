import React, {Component} from "react";
import {StyleSheet, Text} from "react-native";

class ShadowText extends Component {

  render() {
    return (
      <Text style={styles.title}>{this.props.children}</Text>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textShadowOffset: {width: -2, height: 3},
    textShadowColor: '#202020',
    textShadowRadius: 15,
    textAlign: 'center',
    fontSize: 30
  }
});

export default ShadowText
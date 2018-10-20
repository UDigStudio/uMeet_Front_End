import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class ManageQuestion extends Component {
  handleOnPress() {
    //TODO: Set the state question to active
    
  }
  render() {
    const { question } = this.props

    return (
      <View style={styles.container}>
        <Text>{ question.text }</Text>
        <TouchableOpacity onPress={ this.handleOnPress }>
          <Text>{ question.active ? "DEACTIVATE" : "ACTIVATE" }</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ManageQuestion;
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ShadowText from "../shadow-text/shadow-text.component";
import { getGameReady } from "../../selectors/game";
import { connect } from "react-redux";

class Waiting extends Component {

  state = { timeToStart: 10 };

  componentDidMount() {
    if (this.props.isGameReady) {
      this.startTimer();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isGameReady !== this.props.isGameReady && this.props.isGameReady) {
      this.startTimer();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ShadowText>
          <Text style={styles.titleText}>uMeet</Text>
        </ShadowText>
        <View style={styles.subTitle}>
          { this.props.isGameReady ? this.getReadyElements() : this.getWaitingElements() }
        </View>
      </View>
    )
  }

  getWaitingElements() {
    return (
        <View>
          <ShadowText>
            The game will
          </ShadowText>
          <ShadowText>
            start soon!
          </ShadowText>
        </View>
      )

  }

  getReadyElements() {
    return (
      <View>
        <ShadowText>
          The game
        </ShadowText>
        <ShadowText>
          will start in...
        </ShadowText>
        <ShadowText>
          <Text style={styles.countdown}>{ this.state.timeToStart }!</Text>
        </ShadowText>
      </View>
    )
  }

  startTimer = () => {
    this.timer = setInterval(this.countDown, 1000);
  };

  countDown = () => {
    const timeToStart = this.state.timeToStart - 1;
    this.setState({
      timeToStart,
    });

    if (timeToStart === 0) {
      clearInterval(this.timer);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7086EE',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    paddingTop: 25
  },
  countdown: {
    fontSize: 60
  },
  titleText: {
    fontSize: 60
  },
  subTitle: {
    marginTop: 50
  }
});

const mapStateToProps = state => {
  const isGameReady = getGameReady(state);
  return { isGameReady };
};

export default connect(mapStateToProps)(Waiting);
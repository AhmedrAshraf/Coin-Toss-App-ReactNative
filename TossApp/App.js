import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25,
  },
  HeadContainer: {
    backgroundColor: 'teal',
    padding: 5,
    alignItems: 'center',
  },
  header: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 25,
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  goContainer: {
    borderWidth: 1,
    fontWeight: "bold",
    borderColor: 'black',
    marginTop: 100,
    width: 200,
    alignItems: 'center',
    height: 200,
    borderRadius: 1000,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  result: {
    color: '#fff',
    fontSize: 40,
  },
  results: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 50,
    color: 'yellow',

  },
  bodyParent: {
    alignItems: 'center',
  },
  head: {
    backgroundColor: 'red',
    color: '#fff',
    fontWeight: "bold",
    fontSize: 25,
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  tail: {
    backgroundColor: 'red',
    color: '#fff',
    fontWeight: "bold",
    fontSize: 25,
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  toss: {
    marginTop: 50,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: true,
      toss: '',
    }
  }
  headHandler() {
    let toss = Math.ceil(Math.random() * 2);
    if (toss == 1) {
      this.setState({
        coin: false,
        toss: 'Head',
      })
    }
    else if (toss == 2) {
      this.setState({
        coin: false,
        toss: 'Tail',
      })
    }
    setTimeout(() => {
      this.setState({
        coin: true,
        toss: '',
      })
    }, 2000)
  }
  tailHandler() {
    let toss = Math.ceil(Math.random() * 2);
    if (toss == 1) {
      this.setState({
        coin: false,
        toss: 'Head',
      })
    }
    else if (toss == 2) {
      this.setState({
        coin: false,
        toss: 'Tail',
      })
    }
    setTimeout(() => {
      this.setState({
        coin: true,
        toss: '',
      })
    }, 2000)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.HeadContainer}>
          <Text style={styles.header}>Batting Toss</Text>
        </View>

        <View style={styles.bodyParent}>

          {
            (this.state.coin) ?
              (
                <View style={styles.goContainer}>
                  <Text style={styles.result}>Go</Text>
                </View>
              ) :
              (
                <View style={styles.goContainer}>
                  <Text style={styles.results}>{this.state.toss}</Text>
                </View>
              )
          }

          <View style={styles.toss}>
            <TouchableOpacity onPress={this.headHandler.bind(this)}><Text style={styles.head}>Head</Text></TouchableOpacity>
            <TouchableOpacity onPress={this.tailHandler.bind(this)}><Text style={styles.tail}>Tail</Text></TouchableOpacity>
          </View>

        </View>

      </View>
    );
  }
}


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface State {

}

interface Props {

}

export default class App extends React.Component<State, Props> {

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

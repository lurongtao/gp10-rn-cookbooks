import React, { Component } from 'react'
import { View, Text } from 'react-native';

interface Props {
  navigation?: any
}
interface State {
  
}

export default class Detail extends Component<Props, State> {
  state = {}

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('id', 0);
    return (
      <View>
        <Text>{itemId}</Text>
      </View>
    )
  }
}

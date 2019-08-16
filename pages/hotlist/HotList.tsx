import React, { Component } from 'react'

import {
  View,
  Text
} from 'react-native'

import List from '../../components/List'

interface Props {
  
}
interface State {
  
}

export default class HotList extends Component<Props, State> {
  state = {}

  static navigationOptions = {
    title: '热点美食',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  render() {
    return (
      <List start={0} count={20}></List>
    )
  }
}

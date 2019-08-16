import React, { Component } from 'react'

import { View, WebView } from 'react-native'

// import { WebView } from 'react-native-webview'

interface Props {
  
}
interface State {
  
}

export default class Map extends Component<Props, State> {
  state = {}

  render() {
    return (
      <View style={{width: '100%', height: '100%'}}>
        <WebView
          source={{uri: 'https://www.baidu.com'}}
          style={{width: '100%', height: '100%'}}
        ></WebView>
      </View>
    )
  }
}

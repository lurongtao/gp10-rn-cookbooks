import React, { Component } from 'react'
import { View, Switch } from 'react-native';

import { inject, observer } from 'mobx-react'

interface Props {
  store?: any
}
interface State {
  value?: boolean
}

@inject('store')
@observer
export default class More extends Component<Props, State> {
  state: State = {
    value: false
  }

  render() {
    return (
      <View>
        <Switch
          onValueChange={() => {
            this.props.store.setShowMap()
          }}
          value={this.props.store.showMap}
        ></Switch>
      </View>
    )
  }
}

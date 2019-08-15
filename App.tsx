import React, { Fragment } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Provider } from 'mobx-react'

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'

import store from './store/'

import Home from './pages/home/Home'
import HotList from './pages/hotlist/HotList'

const AppNavigator = createStackNavigator(
  {
    Home,
    HotList
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: '美食大全',
      headerStyle: {
        backgroundColor: '#ee7530',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return (
      <Fragment>
        <StatusBar
          barStyle="light-content"
        />
        <Provider store={store}>
          <AppContainer></AppContainer>
        </Provider>
      </Fragment>
    )
  }
}
import React, { Component } from 'react'

import { 
  View,
  Text,
  Image
} from 'react-native'

import CookBook from '../cookbook/CookBook'

import styles from './styles'

import TabNavigator from 'react-native-tab-navigator'

const cookBook = require('../../assets/images/cookbook.png')
const cookBookActive = require('../../assets/images/cookbook-active.png')
const menu = require('../../assets/images/menu.png')
const menuActive = require('../../assets/images/menu-active.png')
const location = require('../../assets/images/location.png')
const locationActive = require('../../assets/images/location-active.png')
const more = require('../../assets/images/more.png')
const moreActive = require('../../assets/images/more-active.png')

interface State {
  selectedTab: string,
  isShowMap: boolean
}

interface Props {
  navigation?: any
}

export default class Home extends Component<Props, State> {
  state: State = {
    selectedTab: 'home',
    isShowMap: true
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="美食大全"
          renderIcon={() => <Image source={cookBook} style={styles.imgSize} />}
          renderSelectedIcon={() => <Image source={cookBookActive} style={styles.imgSize} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <CookBook></CookBook>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'hotlist'}
          title="热点美食"
          renderIcon={() => <Image source={menu} style={styles.imgSize} />}
          renderSelectedIcon={() => <Image source={menuActive} style={styles.imgSize} />}
          onPress={
            () => {
              this.props.navigation.navigate('HotList')
            }
          }>
          <View><Text>hotlist</Text></View>
        </TabNavigator.Item>
        {
          this.state.isShowMap && (<TabNavigator.Item
            selected={this.state.selectedTab === 'map'}
            title="美食地图"
            renderIcon={() => <Image source={location} style={styles.imgSize} />}
            renderSelectedIcon={() => <Image source={locationActive} style={styles.imgSize} />}
            onPress={() => this.setState({ selectedTab: 'map' })}>
            <View><Text>map</Text></View>
          </TabNavigator.Item>)
        }
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="更多"
          renderIcon={() => <Image source={more} style={styles.imgSize} />}
          renderSelectedIcon={() => <Image source={moreActive} style={styles.imgSize} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <View><Text>more</Text></View>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}

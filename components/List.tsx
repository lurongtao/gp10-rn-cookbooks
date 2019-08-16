import React, { Component } from 'react'

import { View, FlatList, Image, Text } from 'react-native'

import { observer, inject } from 'mobx-react'

import styles from './styles.js'

interface Props {
  store?: any,
  start?: number,
  count?: number
}

interface State {
  data?: Array<Object>,
  isRefresh: boolean
}

@inject('store')
@observer
export default class List extends Component<Props, State> {
  state: State = {
    data: [],
    isRefresh: false
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      data: nextProps.store.list.slice(nextProps.start || 0, nextProps.count || 10)
    }
  }

  render() {
    return (
      <View style={styles.better}>
        {
          <FlatList
            data={this.state.data}
            numColumns={2}
            refreshing={this.state.isRefresh}
            onRefresh={this.handleRefresh.bind(this)}
            columnWrapperStyle={styles.betterWrapper}
            keyExtractor={(item: {id: string, [prop: string]: any}, index: number) => item.id + index}
            renderItem={({item,index}: any) => {
                return (
                  <View style={{paddingRight: 10, width: '50%'}}>
                    <View style={styles.betterImgWrapper}>
                      <Image resizeMode={'cover'} style={{height: '100%'}} source={{uri: item.img}}></Image>
                    </View>
                    <View style={styles.betterTitle}><Text style={{fontSize: 18}}>{item.name}</Text></View>
                    <View style={styles.betterHot}><Text style={{color: '#777777'}}>{item.all_click}浏览 {item.favorites}收藏</Text></View>
                  </View>
                )
              }
            }
          >
          </FlatList>
        }
      </View>
    )
  }

  async handleRefresh() {
    this.setState({
      isRefresh: true
    })

    await this.props.store.loadFreshData()

    this.setState({
      isRefresh: false
    })
  }
}

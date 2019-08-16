import React, { Component } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'

import { inject, observer } from 'mobx-react'

import Swiper from 'react-native-swiper'

import List from '../../components/List'

import styles from './styles'

interface Props {
  store?: any,
  navigation?: any
}

interface State {
  
}

@inject('store')
@observer
export default class CookBook extends Component<Props, State> {
  state = {}

  render() {
    return (
      <ScrollView>
        <View style={styles.swiperWrapper}>
          <Swiper 
            autoplay={true}
            showsPagination={false}
            showsButtons={false}
          >
            {
              this.props.store.list.slice(0, 5).map((value, index) => {
                return (
                  <View style={styles.swiperSlide} key={value.id}>
                    <Image source={{uri: value.img}} style={{width: '100%', height: '100%'}}></Image>
                  </View>
                )
              })
            }
          </Swiper>
        </View>
        <View style={styles.hotCateContainer}>
        {
          this.props.store.menu.map((v, i) => {
            return (
              <View key={i} style={styles.hotCateItem}>
                <TouchableOpacity onPress={this._onPressHotCate.bind(this, i)}>
                  <View style={styles.hotCateImgWrap}>
                    <Image source={{uri: v.img}} style={styles.hotCateImg}></Image>
                  </View>
                  <View style={styles.hotCateTextWrap}>
                    <Text style={styles.hotCateText}>{v.title}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          })
        }
          <View style={styles.hotCateLastItem}>
            <View style={styles.hotCateTextWrap}>
              <Text style={styles.hotCateText}>更多...</Text>
            </View>
          </View>
        </View>
        <List start={0} count={10}></List>
      </ScrollView>
    )
  }

  _onPressHotCate(i) {
    this.props.navigation.push('Detail', {
      id: i
    })
  }

  componentDidMount() {
    this.props.store.loadData()
  }
}

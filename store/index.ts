import {
  observable,
  action
} from 'mobx'

import { AsyncStorage } from 'react-native'

import http from '../utils/http'

class Store {
  @observable
  list: Array<any> = []

  @observable
  menu: Array<any> = []

  @observable
  showMap: boolean = false

  @action.bound
  async loadData() {
    this.loadShowMap()

    let dataList = await http.get('http://workdev:8000/api/list')
    this.list = [...dataList]

    let dataMenu = await http.get('http://workdev:8000/api/menu')
    this.menu = [...dataMenu]
  }

  async loadFreshData() {
    let dataList = await http.get('http://workdev:8000/api/list')
    this.list = [...dataList.slice(0, 2), ...this.list]
  }

  @action.bound
  setShowMap() {
    this.showMap = !this.showMap
    AsyncStorage.setItem('showMap', this.showMap.toString())
  }

  async loadShowMap() {
    this.showMap = !!JSON.parse(await AsyncStorage.getItem('showMap'))
  }
}

export default new Store()
import {
  observable,
  action
} from 'mobx'

import http from '../utils/http'

class Store {
  @observable
  list: Array<any> = []

  @observable
  menu: Array<any> = []

  @action.bound
  async loadData() {
    let dataList = await http.get('http://workdev:8000/api/list')
    this.list = [...dataList]

    let dataMenu = await http.get('http://workdev:8000/api/menu')
    this.menu = [...dataMenu]
  }

  async loadFreshData() {
    let dataList = await http.get('http://workdev:8000/api/list')
    this.list = [...dataList.slice(0, 2), ...this.list]
  }
}

export default new Store()
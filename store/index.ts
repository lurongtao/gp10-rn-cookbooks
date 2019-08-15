import {
  observable,
  action
} from 'mobx'

import http from '../utils/http'

class Store {
  @observable
  swiper: Array<Object> = []

  @action.bound
  async loadData() {
    let data = await http.get('http://workdev:8000/api/list')
    this.swiper = data
    console.log(this.swiper)
  }
}

export default new Store()
/**
 * 通过mutation间接更新state的多个方法的对象
 */
import { RECEIVE_ADDRESS, SHOP_CATEGORY, SHOPS } from './mutation-types'

import { reqAddress, reqShopCategore, reqShops, reqSearchShops } from '../api'

export default {
  // 获取地理位置
  async getAddress ({ commit, state }) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    console.log(result)
    // 在提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, { address })
    }
  },
  // 获取商品分累
  async getShopCategory ({ commit }) {
    const result = await reqShopCategore()
    if (result.code !== 0) return
    const shopCategory = result.data
    commit(SHOP_CATEGORY, { shopCategory })
  },
  // 获取店铺
  getShops ({ commit, state }) {
    const geohash = state.latitude + ',' + state.longitude
    reqShops(geohash).then(function (res) {
      console.log(res.data)
      const shops = res.data
      console.log(shops)
      commit(SHOPS, { shops })
    })
  },

  // 搜索店铺
  async getSearchShop ({ commit, state, keyword = '1' }) {
    const geohash = state.latitude + ',' + state.longitude
    console.log(geohash)
    const result = await reqSearchShops(keyword, geohash)
    console.log(result)
    const shops = result.data
    console.log(shops)
  }
}

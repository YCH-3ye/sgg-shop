/**
 * 直接更新state的多个方法的对象
 */

import { RECEIVE_ADDRESS, SHOP_CATEGORY, SHOPS } from './mutation-types'

export default {
  // 获取地理位置
  [RECEIVE_ADDRESS] (state, { address }) {
    state.address = address
  },
  // 获取轮播图信息
  [SHOP_CATEGORY] (state, { shopCategory }) {
    state.shopCategory = shopCategory
  },
  // 获取轮播图信息
  [SHOPS] (state, { shops }) {
    console.log(shops)
    state.shops = shops
  }
}

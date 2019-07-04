/**
 * 直接更新state的多个方法的对象
 */

import {
  RECEIVE_ADDRESS,
  SHOP_CATEGORY,
  SHOPS,
  SERCH_SHOPS,
  RESEIVE_USER_INFO,
  RESEIVE_NULL_INFO,
  RESEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS
} from './mutation-types'

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
  },
  // 获取搜索商品信息
  [SERCH_SHOPS] (state, { shops }) {
    state.search_shops = shops
  },
  // 获取用户信息
  [RESEIVE_USER_INFO] (state, { info }) {
    state.rescordUser = info
  },
  // 退出登录
  [RESEIVE_NULL_INFO] (state) {
    state.rescordUser = {}
  },
  // goods: [], // 商品数组
  // ratings: [], // 商家评价列表
  // info: {} // 商家信息

  // 店铺信息
  [RESEIVE_INFO] (state, { info }) {
    console.log(info)
    state.info = info
  },
  // 接收商家评价数组
  [RECEIVE_RATINGS] (state, { info }) {
    state.ratings = info
  },
  // 接收商品数组
  [RECEIVE_GOODS] (state, { info }) {
    state.goods = info
  }
}

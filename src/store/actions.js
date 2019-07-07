/**
 * 通过mutation间接更新state的多个方法的对象
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
  RECEIVE_GOODS,
  ADD_GOODS_CART,
  DEC_GOODS_CART,
  CLEAR_GOODS_CART
} from './mutation-types'

import {
  reqAddress,
  reqShopCategore,
  reqShops,
  reqSearchShops,
  reqLoginPWD,
  reqOuteLogin,
  reqLoginOut,
  reqShopRatings,
  reqShopGoods,
  reqShopInfo
} from '../api'

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
      const shops = res.data
      commit(SHOPS, { shops })
    })
  },

  // 搜索店铺
  async getSearchShop ({ commit, state }, keyword) {
    console.log(keyword)
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShops(keyword, geohash)
    const shops = result.data
    commit(SERCH_SHOPS, { shops })
  },

  // 账号密码登录
  async getLoginPWD ({ commit }, data) {
    console.log(data)
    const res = await reqLoginPWD(data)
    console.log(res)
  },

  // 同步获取用户信息
  recordUser ({ commit }, info) {
    commit(RESEIVE_USER_INFO, { info })
  },

  // 异步获取用户信息
  async resOuteUser ({ commit }) {
    let res = await reqOuteLogin()
    if (res.code === 0) {
      let info = res.data
      commit(RESEIVE_USER_INFO, { info })
    }
  },
  // 推出登录
  async reqLoginOut ({ commit }) {
    console.log(444)
    let res = await reqLoginOut()
    console.log(res)
    if (res.code === 0) {
      commit(RESEIVE_NULL_INFO)
    }
  },

  // 异步获取商家信息
  async getShopInfo ({ commit }) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      let info = result.data
      commit(RESEIVE_INFO, { info })
    }
  },
  // 获取商品列表
  async getShopGoods ({ commit }, callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      let info = result.data
      commit(RECEIVE_GOODS, { info })
      callback && callback()
    }
  },
  // 获取评论
  async getShopRatings ({ commit }) {
    const result = await reqShopRatings()
    console.log(result)
    if (result.code === 0) {
      commit(RECEIVE_RATINGS, result.data)
    }
  },
  // 添加商品假如购物车
  updataGoodsCart ({ commit }, { flag, goods }) {
    if (flag) {
      commit(ADD_GOODS_CART, goods)
    } else {
      commit(DEC_GOODS_CART, goods)
    }
  },
  clearGoodsCart ({ commit }) {
    commit(CLEAR_GOODS_CART)
  }
}

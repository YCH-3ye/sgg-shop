// 每个请求都是一个模块

import ajax from './ajax'

// mock数据模块
const BASE_URL = '/api'
// 获取商家信息
export const reqShopInfo = () => ajax('/info')

// 1、根据经纬度获取位置详情
export const reqAddress = geohash => ajax(`${BASE_URL}/position/${geohash}`)
// 2、获取轮播图的商品分类
export const reqShopCategore = () => ajax(`${BASE_URL}/index_category`)
// 3、获取轮播图的商品分类
export const reqShops = geohash => ajax(`${BASE_URL}/shops?${geohash}`)
// 4、搜索商铺列表
export const reqSearchShops = (keyword, geohash) =>
  ajax(`${BASE_URL}/search_shops`, { geohash, keyword })

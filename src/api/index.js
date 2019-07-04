// 每个请求都是一个模块

import ajax from './ajax'

// mock数据模块
const BASE_URL = '/api'

// 1、根据经纬度获取位置详情
export const reqAddress = geohash => ajax(`${BASE_URL}/position/${geohash}`)
// 2、获取轮播图的商品分类
export const reqShopCategore = () => ajax(`${BASE_URL}/index_category`)
// 3、获取轮播图的商品分类
export const reqShops = geohash => ajax(`${BASE_URL}/shops?${geohash}`)
// 4、搜索商铺列表
export const reqSearchShops = (keyword, geohash) =>
  ajax(`${BASE_URL}/search_shops`, { geohash, keyword })

// 因为后端做的登陆保持
// 所以不要用action
// 用户登录密码登录
export const reqLoginPWD = (name, pwd, captcha) =>
  ajax(`${BASE_URL}login_pwd`, { name, pwd, captcha }, 'POST')

// 发送验证码
export const reqSendCode = phone => ajax(BASE_URL + '/sendcode', { phone })

// 手机号验证码登陆
export const reqSmsLogin = (phone, code) =>
  ajax(BASE_URL + '/login_sms', { phone, code }, 'POST')

// 自动登录登陆
export const reqOuteLogin = () => ajax(BASE_URL + '/userinfo')

// 退出登录
export const reqLoginOut = () => ajax(BASE_URL + '/logout')

// 获取商家信息
export const reqShopInfo = () => ajax('/info')

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/mstie'
    },
    // 首页
    {
      path: '/mstie',
      name: 'Msite',
      component: resolve => require(['../pages/MSite/MSite.vue'], resolve)
    },
    // 订单
    {
      path: '/order',
      name: 'Order',
      component: resolve => require(['../pages/Order/Order.vue'], resolve)
    },
    {
      path: '/profile',
      name: 'Profile',
      component: resolve => require(['../pages/Profile/Profile.vue'], resolve)
    },
    // 搜索
    {
      path: '/search',
      name: 'Search',
      component: resolve => require(['../pages/Search/Search.vue'], resolve)
    },
    // 商品
    {
      path: '/shop',
      name: 'Shop',
      component: resolve => require(['../pages/Shop/Shop.vue'], resolve),
      children: [
        {
          path: '/shop/goods',
          component: resolve =>
            require(['../pages/Shop/ShopGoods/ShopGoods.vue'], resolve)
        },
        {
          path: '/shop/ratings',
          component: resolve =>
            require(['../pages/Shop/ShopRatings/ShopRatings.vue'], resolve)
        },
        {
          path: '/shop/info',
          component: resolve =>
            require(['../pages/Shop/ShopInfo/ShopInfo.vue'], resolve)
        }, {
          path: '/',
          redirect: '/shop/goods'
        }
      ]
    },

    // 登录
    {
      path: '/Login',
      name: 'login',
      component: resolve => require(['../pages/Login/Login.vue'], resolve)
    }
  ]
})

<template>
  <div class="msite">
    <!-- 头部 -->
    <shopheader :login="true" :search="true">{{address.name}}</shopheader>
    <!-- 区域滚动 -->
    <div ref="wrapper" class="wrapper">
      <div class="content">
        <!-- 轮播图 -->
        <div class="shop_banner" ref="nav">
          <Swiper v-if="categoryArr.length > 0" :loop="true">
            <Slide v-for="(slideItem, index ) in categoryArr" :key="index">
              <ul>
                <li v-for="(item, index ) in slideItem" :key="index">
                  <a href="#">
                    <img :src="baseImageUrl+item.image_url" :alt="item.title">
                    <p>{{item.title}}</p>
                  </a>
                </li>
              </ul>
            </Slide>
            <div class="swiper-pagination"></div>
          </Swiper>
        </div>
        <!-- 商品列表 -->
        <div class="msite_shop_list">
          <div class="msite_shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span @click="handleGoShop">附近商家</span>
          </div>
          <div class="shop_container">
            <ul class="shop_list">
              <li class="shop_li" v-for="(item, index) in shops" :key="index" @click="handleGoShop">
                <div class="shop_li_left">
                  <img :src="baseImgUrl+item.image_path" alt="商品">
                </div>
                <div class="shop_li_right">
                  <div class="shop_name">
                    <h4 class="ellipsis shop_title">
                      <i class="brand">品牌</i>
                      {{item.name}}
                    </h4>
                    <div class="shop_detail" v-for="(item,index) in item.supports" :key="index">
                      <span>{{item.icon_name}}</span>
                    </div>
                  </div>
                  <div class="shop_evaluation">
                    <div class="pingjia">
                      <div class="shop_praise">
                        <start :rating="item.rating"></start>
                        <i class="shop_num">{{item.rating}}</i>
                        <span class="shop_order">月销售{{item.recent_order_num}}单</span>
                      </div>
                      <div class="shop_send">黑马专送</div>
                    </div>
                  </div>
                  <div
                    class="send"
                  >&yen;{{item.float_minimum_order_amount}}起送 / {{item.piecewise_agent_fee.tips}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部导航 -->
    <shopfoot></shopfoot>
  </div>
</template>

<script>
import { Swiper, Slide } from 'vue-swiper-component'
import shopfoot from '../../components/footer/footer'
import shopheader from '../../components/header/header'
import start from '../../components/star/Star'
import { mapActions, mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
  data: function () {
    return {
      dindex: '',
      baseImageUrl: 'https://fuss10.elemecdn.com',
      baseImgUrl: 'http://cangdu.org:8001/img/'
    }
  },
  created () {},
  mounted () {
    this.getAddress()
    this.getShopCategory()
    this.getShops()
  },
  computed: {
    ...mapState(['address', 'shopCategory', 'shops']),
    // 要把轮播图切成8个一个数组里面
    categoryArr () {
      const { shopCategory } = this
      // 准备两个数组
      let arr = []
      let minArr = []
      shopCategory.forEach(v => {
        minArr.push(v)
        if (minArr.length === 8) {
          arr.push(minArr)
          minArr = []
        }
      })
      return arr
    }
  },
  watch: {
    shops (newCound, oldCound) {
      console.log('hh', newCound)
      this._initScroll()
    }
  },
  components: {
    Swiper,
    Slide,
    shopfoot,
    shopheader,
    start
  },
  methods: {
    ...mapActions(['getAddress', 'getShopCategory', 'getShops']),
    _initScroll () {
      this.$nextTick(() => {
        const options = {
          scrollY: true, // 因为scrollY默认为true，其实可以省略
          scrollbar: {
            fade: true
          },
          click: true
        }
        this.scroll = new BScroll(this.$refs.wrapper, options)
      })
    },
    handleGoShop () {
      console.log('haha')
      this.$router.push('/shop')
    }
  }
}
</script>

<style src="./MSite.less" lang="less" scoped>
</style>

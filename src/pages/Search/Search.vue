<template>
  <div class="search_shops">
    <shophead>搜索</shophead>
    <div class="content" ref="wrapper">
      <div>
        <div class="search">
          <div class="search_shop">
            <input type="text" v-model="search" placeholder="请输入商家或美食名称">
            <button @click="handleGetShops(search)">提交</button>
          </div>
        </div>
        <div class="shops">
          <ul>
            <li v-for="( shops,index ) in search_shops" :key="index">
              <section class="item_left">
                <img :src="imgBaseUrl+shops.image_path" alt="">
              </section>
              <section class="item_right">
                <div class="name">{{shops.name}}</div>
                <div class="order">月售 {{shops.month_sales||shops.recent_order_num}} 单</div>
                <div
                  class="distance"
                >{{shops.float_minimum_order_amount}}元起送 / 距离{{shops.distance}}公里</div>
              </section>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <shopfoot></shopfoot>
  </div>
</template>

<script>
import shopfoot from '../../components/footer/footer'
import shophead from '../../components/header/header'
import BScroll from 'better-scroll'
import { mapActions, mapState } from 'vuex'
export default {
  data: function () {
    return {
      search: '',
      imgBaseUrl: 'http://cangdu.org:8001/img/'
    }
  },
  components: { shopfoot, shophead },
  created () {
    // this.getSearchShop()
  },
  computed: {
    ...mapState(['search_shops'])
  },
  methods: {
    ...mapActions(['getSearchShop']),
    _initScroll () {
      this.$nextTick(() => {
        const options = {
          // scrollY: true, // 因为scrollY默认为true，其实可以省略
          // scrollbar: {
          //   fade: true
          // }
        }
        this.scroll = new BScroll(this.$refs.wrapper, options)
      })
    },
    handleGetShops (search) {
      if (search.trim() === '') return
      // console.log(this.search)
      this.getSearchShop(search)
    }
  },
  watch: {
    search_shops: {
      handler () {
        this._initScroll()
      },
      immediate: true
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../common/less/mixmins';
.search_shops {
  height: 100%;
  padding: 40px 0 50px;
  background-color: #fff;
  .content {
    height: 100%;
    // overflow: scroll;
  }
}
.search {
  background-color: #fff;
  .search_shop {
    padding: 12px 8px;
    background-color: #fff;
    height: 60px;
    box-sizing: border-box;
    input {
      float: left;
      width: 79%;
      height: 100%;
      background-color: #eee;
      text-indent: 10px;
      border-radius: 3px;
      font-size: 14px;
    }
    button {
      float: right;
      width: 18%;
      background-color: @green;
      border: none;
      height: 100%;
      color: #fff;
      border-radius: 3px;
    }
  }
}
.shops li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  .item_left {
    float: left;
    margin-right: 5px;
    width: 50px;
    height: 50px;
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .item_right {
    overflow: hidden;
    font-size: 12px;
    .name {
      line-height: 16px;
    }
    .order {
      line-height: 12px;
      margin-bottom: 6px;
    }
    .distance {
      line-height: 12px;
    }
  }
}
.shops li:last-child {
  border-bottom: none;
}
::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #333;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #333;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #333;
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #333;
}
</style>

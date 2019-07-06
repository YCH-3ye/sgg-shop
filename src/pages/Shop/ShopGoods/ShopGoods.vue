<template>
  <div class="content">
    <div ref="wrap_title">
      <ul class="title">
        <li :class="{'active': active===index}" v-for="(good,index) in goods" :key="index">
          <i :style="{backgroundImage: `url(${good.icon})`}" v-if="good.icon"></i>
          <a href="#">{{good.name}}</a>
        </li>
      </ul>
    </div>
    <div class="shop" ref="wrap_goods">
      <ul>
        <li class="shopsli" v-for="(good,index) in goods" :key="index">
          <h2>{{good.name}}</h2>
          <ul>
            <li class="stli" v-for="(item,index) in good.foods" :key="index">
              <div>
                <div class="shopimg">
                  <img :src="item.image" alt="">
                </div>
                <div class="stliinfo">
                  <h4>{{item.name}}</h4>
                  <p>{{item.description}}</p>
                  <p>
                    <span>月售{{item.sellCount}}份</span>
                    <span>好评率{{item.rating}}%</span>
                  </p>
                </div>
                <div class="place">
                  <span>Y{{item.price}}</span>
                  <cartControl></cartControl>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <cart></cart>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
import cartControl from '../../../components/cartControl/cartControl'
import cart from '@/components/cart/cart'
export default {
  data () {
    return {
      scrollY: 0, // 右侧滑动的Y轴坐标 (滑动过程种实时变化)
      tops: [], // 所有右侧分类li的top组成的数组  （列表第一次显示后就不再变化）
      food: {},
      active: 0
    }
  },
  mounted () {
    this.$store.dispatch('getShopGoods', () => {
      // 数据更新后执行
      console.log(this)
      this.$nextTick(() => {
        // 列表数据更新显示后执行
        console.log(this)
        this._initTitle()
        this._initGoods()
      })
    })
  },
  methods: {
    _initGoods () {
      console.log()
      this.scroll = new BScroll(this.$refs.wrap_title, {
        click: true
      })
      this.scrollGood = new BScroll(this.$refs.wrap_goods, {
        probeType: 3,
        click: true
      })
      // 添加滚动事件
      this.scrollGood.on('scroll', ({ x, y }) => {
        this.scrollY = Math.abs(y)
        // 在滚动事件里面添加事件改编左边标题效果
        this.tops.forEach((v, i) => {
          if (v < this.scrollY && this.scrollY < this.tops[i + 1]) {
            console.log('111', v, this.scrollY, this.tops[i + 1])
            this.active = i
          }
        })
      })
      // 给右侧列表绑定scroll结束的监听
      this.scrollGood.on('scrollEnd', ({ x, y }) => {
        // console.log('scrollEnd', x, y)
        this.scrollY = Math.abs(y)
        console.log('scrollEnd', this.scrollY)
      })
    },
    // 初始化
    _initTitle () {
      let tops = []
      let top = 0
      tops.push(top)
      let lis = document.querySelectorAll('.shopsli')
      console.log(lis)
      lis.forEach(v => {
        console.log(v.clientHeight)
        top += v.clientHeight
        tops.push(top)
      })
      this.tops = tops
    }
  },
  computed: {
    ...mapState(['goods'])
  },
  watch: {
    // goods () {
    //   this._initTitle()
    //   this._initGoods()
    // }
  },
  components: {
    cartControl,
    cart
  }
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  position: absolute;
  top: 195px;
  bottom: 46px;
  width: 100%;
  background: #fff;
  overflow: hidden;
  .title {
    float: left;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 80px;
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    ul {
      overflow: hidden;
      background-color: #ccc;
    }
    li {
      width: 80px;
      height: 56px;
      padding: 0 10px;
      line-height: 56px;
      text-align: center;
      i {
        width: 10px;
        height: 100%;
        background-size: contain;
        float: left;
        background-repeat: no-repeat;
        background-position: center;
      }
      &.active {
        background-color: #fff;
      }
      a {
        display: block;
        width: 100%;
        height: 100%;
        font-size: 12px;
        border-bottom: 1px solid #eee;
      }
    }
  }
  .shop {
    overflow: hidden;
    h2 {
      width: 100%;
      line-height: 26px;
      background-color: #f3f5f7;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      text-indent: 10px;
      color: #93999f;
    }
    .stli {
      margin: 20px;
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid #ccc;
      overflow: hidden;
      .shopimg {
        margin-right: 10px;
        width: 57px;
        height: 78px;
        float: left;
        img {
          width: 100%;
        }
      }
      .stliinfo {
        overflow: hidden;
        h4 {
          margin: 2px 0 8px 0;
          color: #07111b;
        }
        p {
          font-size: 8px;
          line-height: 10px;
          margin-bottom: 8px;
        }
      }
      .place {
        span {
          float: left;
          color: #f01414;
        }
        div {
          float: right;
          span {
            float: none;
          }
          i {
            width: 24px;
            height: 24px;
            text-align: center;
            display: inline-block;
            background-color: #02a774;
            line-height: 24px;
            color: #fff;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
.cart {
  height: 48px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  background-color: #141d27;

  .qisong {
    width: 105px;
    height: 56px;
    background-color: #2b333b;
    text-align: center;
    line-height: 48px;
    color: #fff;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .logo {
    width: 56px;
    height: 56px;
    margin: 0 12px;
    position: absolute;
    left: 0px;
    position: absolute;
    left: 0px;
    top: 0;
    background: #2b333b;
    border: 6px solid #141d27;
    border-radius: 50%;
    margin-top: -15px;
    i {
      display: block;
      width: 44px;
      height: 44px;
      line-height: 44px;
      font-size: 24px;
      text-align: center;
      color: #80858a;
    }
  }
  .num {
    padding: 0 105px 0 80px;
    height: 100%;
    .total {
      margin-top: 10px;
      font-size: 16px;
      color: #fff;
      font-weight: 700;
    }
    .peisong {
      color: rgba(255, 255, 255, 0.4);
      margin-top: 5px;
      margin-left: -10px;
      font-size: 10px;
    }
  }
}
</style>

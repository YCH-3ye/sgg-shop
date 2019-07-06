<template>
  <div class="cartP">
    <div class="carts">
      <div class="goods" v-if="activeGoodList">
        <h3>
          购物车
          <span>清空</span>
        </h3>
        <ul>
          <li>
            <div class="goodname">皮蛋瘦肉粥</div>
            <div class="goodinfo">
              <span>&yen;10</span>
              <cartControl class="cartControl"></cartControl>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart">
      <div class="logo">
        <i class="iconfont icon-gouwuche"></i>
      </div>
      <div class="num">
        <p class="total">Y0</p>
        <p class="peisong">另需配送费Y4元</p>
      </div>
      <div class="qisong">Y20远起送</div>
    </div>
  </div>
</template>
<script>
import cartControl from '../cartControl/cartControl'
export default {
  data () {
    return {
      activeGoodList: true
    }
  },
  components: {
    cartControl
  }
}
</script>

<style lang="less" scoped>
.cartP {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.3);
}
.carts {
  position: absolute;
  bottom: 40px;
  width: 100%;
  .goods {
    position: absolute;
    bottom: 100%;
    width: 100%;
    h3 {
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding: 0 18px;
      background: #f3f5f7;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      font-size: 12px;
      span {
        float: right;
        color: #00a0dc;
      }
    }
    li {
      line-height: 40px;
      padding: 0 18px;
      background-color: #fff;
      overflow: hidden;
      line-height: 60px;
      .goodinfo {
        float: right;
        span {
          color: #f01414;
        }
      }
      .goodname {
        float: left;
      }
      .cartControl {
        width: 80px;
        padding-left: 5px;
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

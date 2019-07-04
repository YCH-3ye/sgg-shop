<template>
  <div class="shop">
    <div class="header" :style="{backgroundImage: `url(${info.bgImg})`}">
      <i class="iconfont icon-arrow-left" @click="$router.go(-1)"></i>
      <div class="shopGoos" :style="{backgroundImage: `url(${info.avatar})`}"></div>
    </div>
    <div class="content">
      <div class="shop_title">
        <div class="shop_name">
          <h3>
            <i class="pingpai">品牌</i>
            {{ info.name}}
            <i class="iconfont icon-arrfill_u-copy"></i>
          </h3>
          <p>
            <span class="xingji">{{info.score}}</span>
            <span>月售90单</span>
            <span>硅谷转送 约28分钟</span>
            <span>距离1000m</span>
          </p>
        </div>
      </div>
      <div class="shoudan">
        <p>
          <i class="icon">{{info.supports[0].name}}</i>
          {{info.supports[0].content}}
          <span>
            {{info.supports.length}}个优惠
            <i class="iconfont icon-f11"></i>
          </span>
        </p>
      </div>
      <div class="option">
        <ul>
          <li>点单</li>
          <li class="active">评价</li>
          <li>商家</li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  mounted () {
    this.$store.dispatch('getShopInfo')
  },
  computed: {
    ...mapState(['info'])
  },
  components: {}
}
</script>

<style lang="less" scoped>
@import '../../common/less/mixmins.less';
.header {
  font-size: 20px;
  line-height: 50px;
  vertical-align: top;
  background-color: #ccc;
  background-size: cover;
  position: relative;

  i {
    width: 50px;
    line-height: 50px;
    text-align: center;
    display: block;
  }
  .shopGoos {
    position: absolute;
    width: 66px;
    height: 66px;
    top: 10px;
    left: 50%;
    background-size: cover;
    transform: translateX(-50%);
    border: 1px solid #ccc;
    background-color: lime;
  }
}
.shop {
  background-color: #fff;
  height: 100%;
}

.shop_name {
  width: 100%;
  height: 80px;
  padding: 30px 20px 5px;
  text-align: center;

  h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
  }
  .pingpai {
    background-image: linear-gradient(90deg, #fff100, #ffe339);
    font-size: 8px;
    padding: 0 5px;
    vertical-align: top;
    margin-right: 5px;
  }
  p {
    font-size: 11px;
    margin-top: 5px;
    span {
      margin-right: 5px;
    }
  }
}
.shoudan {
  font-size: 9px;
  color: #333;
  text-align: center;
  line-height: 20px;
  p {
    display: inline-block;
    border: 1px solid #eee;
    padding: 0 5px;
  }
  .icon {
    background-color: #70bc46;
    color: #fff;
    padding: 0 5px;
    margin-right: 10px;
  }
  span {
    margin-left: 20px;
  }
}
.option {
  ul {
    height: 40px;
    display: flex;
    justify-content: space-around;
    justify-items: center;
    .bottom_border_1px(@bc);
    li {
      line-height: 40px;
      text-align: center;
      display: inline-block;
      border-bottom: 3px solid rgba(0, 0, 0, 0);
      &.active {
        color: #02a774;
        border-bottom: 3px solid #02a774;
      }
    }
  }
}
</style>

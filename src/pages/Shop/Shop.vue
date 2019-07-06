<template>
  <div class="shop">
    <div class="header" :style="{backgroundImage: `url(${info.bgImg})`}">
      <i class="iconfont icon-arrow-left" @click="$router.go(-1)"></i>
      <div class="shopGoos" :style="{backgroundImage: `url(${info.avatar})`}"></div>
    </div>
    <div class="content">
      <div class="shop_title">
        <div class="shop_name" @click="toggleShopShow">
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
        <p v-if="info.supports">
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
      <!-- <transition name="fade">
        <div class="activity-sheet" v-show="supportShow">
          <div class="activity-sheet-content">
            <h2 class="activity-sheet-title">优惠活动</h2>
            <ul class="list">
              <li
                class="activity-item"
                v-for="(support, index) in info.supports"
                :key="index"
                :class="supportClasses[support.type]"
              >
                <span class="content-tag">
                  <span class="mini-tag">{{support.name}}</span>
                </span>
                <span class="activity-content">{{support.content}}</span>
              </li>
            </ul>
            <div class="activity-sheet-close" @click="toggleSupportShow">
              <span class="iconfont icon-close"></span>
            </div>
          </div>
          <div class="activity-sheet-cover"></div>
        </div>
      </transition>-->
    </div>
    <transition name="fade">
      <div class="shop-brief-modal" v-show="shopShow">
        <div class="brief-modal-content">
          <h2 class="content-title">
            <span class="content-tag">
              <span class="mini-tag">品牌</span>
            </span>
            <span class="content-name">{{info.name}}</span>
          </h2>
          <ul class="brief-modal-msg">
            <li>
              <h3>{{info.score}}</h3>
              <p>评分</p>
            </li>
            <li>
              <h3>{{info.sellCount}}单</h3>
              <p>月售</p>
            </li>
            <li>
              <h3>{{info.description}}</h3>
              <p>约{{info.deliveryTime}}分钟</p>
            </li>
            <li>
              <h3>{{info.deliveryPrice}}元</h3>
              <p>配送费用</p>
            </li>
            <li>
              <h3>{{info.distance}}</h3>
              <p>距离</p>
            </li>
          </ul>
          <h3 class="brief-modal-title">
            <span>公告</span>
          </h3>
          <div class="brief-modal-notice">{{info.bulletin}}</div>
          <div class="mask-footer" @click="toggleShopShow">
            <span class="iconfont icon-close"></span>
          </div>
        </div>
        <div class="brief-modal-cover"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      shopShow: false
    }
  },
  methods: {
    toggleShopShow () {
      this.shopShow = !this.shopShow
    }
  },
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
  width: 100%;
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

.shop-brief-modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  .brief-modal-content {
    width: 340px;
    height: 234px;
    background-color: #fff;
    border-radius: 5px;
    margin: 400px auto;
    text-align: center;
    padding: 20px;
    .content-title {
      line-height: 24px;
      font-size: 20px;
      font-weight: 700;
      .mini-tag {
        display: inline-block;
        width: 36px;
        height: 18px;
        background-color: #ffe339;
        font-size: 14px;
        line-height: 18px;
      }
    }
    .brief-modal-msg {
      margin-top: 20px;
      overflow: hidden;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        // width: 20%;
        h3 {
          font-size: 15px;
          color: #333;
          margin-bottom: 8px;
        }
        p {
          font-size: 12px;
          color: #ccc;
        }
      }
    }
  }
  .brief-modal-title {
    position: relative;
    width: 85px;
    height: 16px;
    margin: 15px auto;
    background-image: linear-gradient(90deg, #fff 0%, #333 50%, #fff 100%);
    background-size: 100% 1px;
    background-position: 50%;
    background-repeat: no-repeat;
    text-align: center;
    span {
      background-color: #fff;
      padding: 0 10px;
    }
  }
  .brief-modal-notice {
    text-align: left;
    font-size: 13px;
    line-height: 1.5;
  }
  .mask-footer {
    position: relative;
    bottom: -50px;
    margin: 0 auto;
    color: #fff;
    width: 30px;

    span {
      font-size: 24px;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

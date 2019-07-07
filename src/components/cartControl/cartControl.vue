<template>
  <div class="cartControl">
    <transition name="more">
      <i v-if="good.count" @click="addHandel(false)">--</i>
    </transition>
    <span v-if="good.count">{{good.count}}</span>
    <i class="iconfont icon-hao" @click="addHandel(true)"></i>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      actions: false
    }
  },
  methods: {
    ...mapActions(['updataGoodsCart']),
    addHandel (flag) {
      this.updataGoodsCart({ flag: flag, goods: this.good })
    }
  },
  computed: {
    ...mapState([])
  },
  props: {
    good: Object
  }
}
</script>

<style lang="less" scoped>
.cartControl {
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
.more-enter-active,
.more-leave-active {
  transition: all 0.5s;
  opacity: 1;
}
.more-enter, .more-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(30px) rotateZ(360deg);
  opacity: 0;
}
</style>

<template>
  <div>
    <header class="shop_header">
      <div class="search" v-if="search">
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="title ellipsis">
        <slot></slot>
      </div>
      <div class="login" v-if="login">
        <span v-if="rescordUser.name">
          <i class="iconfont icon-yonghu"></i>
        </span>
        <span v-else>登录|注册</span>
      </div>
    </header>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: ['login', 'search'],
  computed: {
    ...mapState(['rescordUser'])
  }
}
</script>

<style lang="less" scoped>
@import '../../common/less/mixmins.less';
.shop_header {
  height: 45px;
  line-height: 45px;
  width: 100%;
  position: fixed;
  top: 0px;
  background-color: @green;
  color: #fff;
  padding: 0 20%;
  z-index: 300;
  .search {
    padding-left: 15px;
    width: 20%;
    position: absolute;
    left: 0;
    box-sizing: border-box;
    & > i {
      font-size: 25px;
      font-weight: 700;
    }
  }
  .login {
    width: 20%;
    position: absolute;
    right: 0;
    top: 0;
    text-align: right;
    padding-right: 10px;
  }
  .title {
    padding: 0 10%;
    font-size: 22px;
    margin: 0 auto;
    text-align: center;
    // font-weight: 700;
  }
}
</style>

<template>
  <div class="shop_footer">
    <ul class="shop_footer_ul">
      <li class="shop_footer_li">
        <router-link to="mstie">
          <i class="iconfont icon-waimai"></i>
          <span>外卖</span>
        </router-link>
      </li>
      <li class="shop_footer_li">
        <router-link to="search">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索</span>
        </router-link>
      </li>
      <li class="shop_footer_li">
        <router-link to="order">
          <i class="iconfont icon-dingdan-copy"></i>
          <span>订单</span>
        </router-link>
      </li>
      <li class="shop_footer_li">
        <router-link to="profile">
          <i class="iconfont icon-wo"></i>
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
@import '../../common/less/mixmins';
.shop_footer {
  position: fixed;
  height: 50px;
  padding: 5px;
  bottom: 0px;
  width: 100%;
  background-color: #fff;
  z-index: 100;
  .shop_footer_ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    text-align: center;
    .shop_footer_li {
      width: 20%;
      a {
        color: #999;
        display: block;
      }
      & .active {
        color: @green;
      }
    }
    i {
      display: block;
      font-size: 26px;
      margin-bottom: 3px;
    }
  }
}
</style>

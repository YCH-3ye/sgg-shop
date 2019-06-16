<template>
  <div>
    <shophead>搜索</shophead>
    <div class="search">
      <div class="search_shop">
        <input type="text" placeholder="请输入商家或美食名称">
        <button>提交</button>
      </div>
    </div>
    <shopfoot></shopfoot>
  </div>
</template>

<script>
import shopfoot from '../../components/footer/footer'
import shophead from '../../components/header/header'
import { mapActions } from 'vuex'
// import $ from 'jquery'
export default {
  components: { shopfoot, shophead },
  created () {
    this.getSearchShop()
  },
  methods: {
    ...mapActions(['getSearchShop'])
  }
}
</script>

<style lang="less" scoped>
@import '../../common/less/mixmins';
.search {
  margin-top: 45px;
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

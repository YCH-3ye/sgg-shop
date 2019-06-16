<template>
  <div>
    <shophead>订单列表</shophead>
    <div class="login">
      <div v-if="islogin"></div>
      <div v-else>
        <div class="nologin">
          <img src="./images/order/person.png" alt="">
          <p>登陆后查看外卖订单</p>
          <button>立即登录</button>
        </div>
      </div>
    </div>
    <shopfoot></shopfoot>
  </div>
</template>

<script>
import shopfoot from '../../components/footer/footer'
import shophead from '../../components/header/header'
export default {
  data: function () {
    return {
      islogin: false
    }
  },
  components: { shopfoot, shophead }
}
</script>

<style lang="less" scoped>
@import '../../common/less/mixmins';
.login {
  margin-top: 45px;
  overflow: hidden;
  .nologin {
    margin: 90px auto 0;
    width: 60%;
    overflow: hidden;
    text-align: center;
    img {
      width: 100%;
    }
    p {
      margin: 10px 0;
      color: #6a6a6a;
      font-size: 17px;
    }
    button {
      background-color: @green;
      border: none;
      color: #fff;
      padding: 10px 20px;
      border-radius: 5px;
    }
  }
}
</style>

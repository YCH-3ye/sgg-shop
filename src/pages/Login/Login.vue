<template>
  <div class="login">
    <div class="back">
      <i class="iconfont icon-arrow-left"></i>
    </div>
    <div class="login_content">
      <h4>硅谷外卖</h4>
      <div class="manner">
        <span class="SMS" :class="{active : isActive}">短信登录</span>
        <span class="PWD" :class="{active : !isActive}">密码登录</span>
      </div>
      <div></div>
      <!-- 手机登录 -->
      <template v-if="LgMethod">
        <div class="phone input">
          <input type="text" maxlength="11" placeholder="手机号">
          <button class="getCode" disabled="disabled">获取验证码</button>
        </div>
        <div class="verifycode input">
          <input type="text" maxlength="6" placeholder="验证码">
        </div>
      </template>
      <!-- 手机号登录 -->
      <template v-else>
        <div class="useName input">
          <input type="text" maxlength="11" placeholder="手机/邮箱/用户名">
        </div>
        <div class="passWord input">
          <input type="password" maxlength="11" placeholder="密码" v-if="isPWD">
          <input type="text" maxlength="11" placeholder="密码" v-else>
          <div class="PWS" :class="{cutover:isPWD}" @click="isPWD= !isPWD">
            <span>{{isPWD?'abc':'...'}}</span>
            <i></i>
          </div>
        </div>
        <div class="code input">
          <input type="text" maxlength="4" placeholder="验证码">
        </div>
      </template>
      <p class="pact">
        温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
        <span>《用户服务协议》</span>
      </p>
      <button class="login" @click="isLoginHandle">登录</button>
      <p class="about">关于我们</p>
    </div>
    <div class="model" v-if="isShowModel">
      <!-- bounceInDown -->
      <div class="content animated bounceInDown">
        <div class="icon">
          <i></i>
          <i></i>
        </div>
        <!-- <div class="info"> -->
        <span>{{'验证码必须制定'}}</span>
        <button @click="isShowModelHandle">确认</button>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false,
      LgMethod: false,
      isPWD: true,
      eyeflag: 1,
      isShowModel: false,
      isLogin: false
    }
  },
  methods: {
    handleClick: function () {
      console.log(this.eyeflag)
      this.eyeflag = this.eyeflag + 1
    },
    isLoginHandle: function () {
      if (!this.isLogin) {
        console.log(123)
        this.isShowModel = true
      }
    },
    isShowModelHandle: function () {
      console.log(this.isShowModel)
      this.isShowModel = !this.isShowModel
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
}
.back {
  position: absolute;
  font-size: 20px;
  color: #666;
  margin-top: 5px;
  margin-left: 5px;
}
.login_content {
  width: 80%;
  margin: 60px auto 0;

  overflow: hidden;
  text-align: center;
  h4 {
    font-size: 40px;
    font-weight: bold;
    color: #02a774;
  }
  .manner {
    margin-top: 40px;
    .SMS {
      margin-right: 30px;
    }
    .active {
      color: #02a774;
      padding-bottom: 5px;
      border-bottom: 3px solid #02a774;
    }
  }
  .phone,
  .verifycode {
    width: 100%;
    position: relative;

    .getCode {
      position: absolute;
      right: 10px;
      top: 50%;
      color: #ccc;
      transform: translateY(-50%);
      background-color: transparent;
      border: none;
    }
  }
  .pact {
    margin-top: 10px;
    color: #999;
    font-size: 14px;
    line-height: 20px;
    span {
      color: #02a774;
    }
  }
  .login {
    margin-top: 30px;
    width: 100%;
    border: none;
    background-color: #4cd96f;
    border-radius: 5px;
    line-height: 42px;
    color: #fff;
    font-size: 16px;
  }
  .about {
    margin-top: 20px;
    color: #ccc;
  }
}
.passWord {
  position: relative;
  .PWS {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    line-height: 16px;
    font-size: 12px;
    background-color: #02a774;
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 0 6px;
    box-sizing: content-box;
    text-align: right;
    color: #ccc;
    transform: 0.2 all;
    &.cutover {
      background-color: #fff;
      text-align: left;
      color: #fff;

      i {
        transform: translateX(30px);
        color: #fff;
      }
      span {
        color: #666;
      }
    }
    i {
      width: 16px;
      height: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;
      display: block;
      position: absolute;
      top: -1px;
      left: -1px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
      transform: translateX(0px);
      box-sizing: content-box;
      transition: all 0.3s;
      background-color: #fff;
    }
    span {
      color: #fff;
    }
  }
}
input {
  width: 100%;
  height: 48px;

  border: 1px solid #ccc;
  border-radius: 5px;
  text-indent: 5px;
  outline: none;
  &:focus {
    border-color: palegreen;
  }
}
.input {
  margin-top: 20px;
}

.model {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  .content {
    position: relative;
    width: 60%;
    padding-top: 20px;
    text-align: center;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    margin-left: -110px;
    margin-top: -150px;
  }
  .icon {
    width: 55px;
    height: 55px;
    border: 2px solid #f8cb86;
    margin: 0 auto;
    border-radius: 50%;
    text-align: center;
    & i:first-child {
      height: 30px;
      width: 2px;
      display: block;
      margin: 5px auto;
      background-color: #f8cb86;
    }
    & i:last-child {
      width: 2px;
      height: 2px;
      display: block;
      margin: 3px auto;
      background-color: #f8cb86;
    }
  }
  span {
    margin: 10px auto;
    display: block;
  }
  button {
    display: block;
    background-color: #4cd964;
    margin-top: 10px;
    border: none;
    width: 100%;
    height: 35px;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
  }
}
</style>

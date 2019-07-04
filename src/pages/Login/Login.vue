<template>
  <div class="login">
    <div class="back">
      <i class="iconfont icon-arrow-left" @click="handleGoBack"></i>
    </div>
    <div class="login_content">
      <h4>硅谷外卖</h4>
      <div class="manner">
        <span class="SMS" :class="{active : LgMethod}" @click="LgMethod = true">短信登录</span>
        <span class="PWD" :class="{active : !LgMethod}" @click="LgMethod = false">密码登录</span>
      </div>
      <!-- 手机登录 -->
      <template v-if="LgMethod">
        <div class="phone input">
          <input type="text" maxlength="11" v-model="phone" placeholder="手机号">
          <button
            class="getCode"
            :disabled="!rightPhone"
            @click="handleGetCode"
          >{{timeNum>0?timeNum+'后重新获取验证码':'获取验证码'}}</button>
        </div>
        <div class="verifycode input">
          <input type="text" maxlength="6" v-model="code" placeholder="验证码">
        </div>
      </template>
      <!-- 账号登录 -->
      <template v-else>
        <div class="useName input">
          <input type="text" v-model="usename" maxlength="11" placeholder="手机/邮箱/用户名">
        </div>
        <div class="passWord input">
          <input type="password" maxlength="11" v-model="pwd" placeholder="密码" v-if="isPWD">
          <input type="text" maxlength="11" v-model="pwd" placeholder="密码" v-else>
          <div class="PWS" :class="{cutover:isPWD}" @click="isPWD= !isPWD">
            <span>{{isPWD?'abc':'...'}}</span>
            <i></i>
          </div>
        </div>
        <div class="code input">
          <input type="text" v-model="captcha" maxlength="4" placeholder="验证码">
          <img
            ref="captcha"
            class="codeimg"
            src="http://localhost:4000/captcha"
            alt=""
            @click="getCaptcha()"
          >
        </div>
      </template>
      <p class="pact">
        温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
        <span>《用户服务协议》</span>
      </p>
      <button class="login" @click="handleLogin">登录</button>
      <p class="about">关于我们</p>
    </div>
    <model v-if="isShowModel" @getHandleModel="isShowModelHandle">{{modelInfo}}</model>
  </div>
</template>

<script>
import model from '../../components/model/model'
import { mapState } from 'vuex'
import { reqLoginPWD, reqSendCode, reqSmsLogin } from '../../api/index'
export default {
  data () {
    return {
      // isActive: false,
      LgMethod: false,
      isPWD: true,
      eyeflag: 1,
      isShowModel: false,
      isLogin: false,
      modelInfo: '',
      usename: '',
      pwd: '',
      captcha: '',
      phone: '',
      code: '',
      timeNum: 0,
      clearId: ''
    }
  },
  methods: {
    // 控制模态框的显示和隐藏
    isShowModelHandle: function () {
      this.isShowModel = !this.isShowModel
    },
    // 返回上一个页面
    handleGoBack () {
      this.$router.go(-1)
    },
    // 登录
    async handleLogin () {
      // 判断是短信登录还是账号登录
      let result
      if (this.LgMethod) {
        const { phone, code, clearId } = this
        if (phone.trim() === '') {
          this.showModel('手机号不能为空')
          return
        } else if (code.trim() === '') {
          this.showModel('验证码不能为空')
          return
        } else if (!clearId) {
          this.showModel('请获取验证码')
          return
        }
        // 发送ajax请求短信登录
        result = await reqSmsLogin(phone, code)
      } else {
        const { usename, pwd, captcha } = this
        if (usename.trim() === '') {
          this.showModel('用户名不能为空')
          return
        } else if (pwd.trim() === '') {
          this.showModel('密码不能为空')
          return
        } else if (captcha.trim() === '') {
          this.showModel('验证码不能为空')
          return
        }
        result = await reqLoginPWD(usename, pwd, captcha)
      }
      console.log(result)
      // 登录后对数据进行处理
      if (result.code === 0) {
        const user = result.data
        console.log(user)
        // 保存到vuex当中
        this.$store.dispatch('recordUser', user)
        // 跳转到个人页面
        this.$router.replace('/profile')
      } else {
        // 显示新的图片验证码
        this.getCaptcha()
        // 显示警告提示
        const msg = result.msg
        this.showModel(msg)
      }
    },
    // 提示框
    showModel (info) {
      this.isShowModel = true
      this.modelInfo = info
      console.log(this.modelInfo)
    },
    // 获取图片验证码
    getCaptcha () {
      this.$refs.captcha.src =
        'http://localhost:4000/captcha?time=' + Date.now()
    },
    // 获取验证码
    async handleGetCode () {
      if (this.clearId) return

      this.timeNum = 30
      this.clearId = setInterval(() => {
        this.timeNum--
        console.log(this.clearId)
        if (this.timeNum === 0) {
          console.log(1)
          clearInterval(this.clearId)
          this.clearId = undefined
        }
      }, 1000)
      let res = await reqSendCode(this.phone)
      if (res.code === 1) {
        this.showModel(res.msg)
        if (this.timeNum) {
          this.timeNum = 0
          clearInterval(this.clearId)
          this.clearId = undefined
        }
      }
    }
  },
  computed: {
    ...mapState(['']),
    rightPhone () {
      return /^1\d{10}$/.test(this.phone)
    }
  },
  components: {
    model
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
.code {
  position: relative;
  overflow: hidden;
  .codeimg {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 150px;
    height: 50px;
  }
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
      // color: #ccc;
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

bottom {
  outline: none;
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

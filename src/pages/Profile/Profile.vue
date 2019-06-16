<template>
  <div>
    <shophead>我的</shophead>
    <div class="profile-link">
      <router-link to="login" class="profile">
        <div class="profile-photo">
          <i class="iconfont icon-59"></i>
        </div>
        <div class="profile-info">
          <i class="iconfont icon-arrow-right2 arrow"></i>
          <p class="login">
            <a href="#">登录/注册</a>
          </p>
          <p class="phone">
            <span>
              <i class="iconfont icon-shouji"></i>暂无绑定手机号
            </span>
          </p>
        </div>
      </router-link>
    </div>
    <div class="profile-number">
      <ul>
        <li>
          <div class="num">
            <span class="yuan">0.00</span>元
          </div>
          <span>我的余额</span>
        </li>
        <li>
          <div class="num">
            <span class="offer">0.00</span>个
          </div>
          <span>我的优惠</span>
        </li>
        <li>
          <div class="num">
            <span class="fraction">0.00</span>分
          </div>
          <span>我的积分</span>
        </li>
      </ul>
    </div>
    <div class="profile-item">
      <ul>
        <li>
          <i class="logo iconfont icon-dd_active"></i>
          <div>
            我的订单
            <i class="iconfont icon-arrow-right2 arrow"></i>
          </div>
        </li>
        <li>
          <i class="logo iconfont icon-jifen"></i>
          <div>
            积分商城
            <i class="iconfont icon-arrow-right2 arrow"></i>
          </div>
        </li>
        <li>
          <i class="logo iconfont icon-vip"></i>
          <div>
            黑马外卖
            <i class="iconfont icon-arrow-right2 arrow"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="service">
      <i class="logo iconfont icon-fangzi"></i>
      <div>
        服务中心
        <i class="iconfont icon-arrow-right2 arrow"></i>
      </div>
    </div>
    <shopfoot></shopfoot>
  </div>
</template>

<script>
import shophead from '../../components/header/header'
import shopfoot from '../../components/footer/footer'
export default {
  components: { shopfoot, shophead }
}
</script>

<style lang="less" scoped>
@import '../../common/less/mixmins.less';
.profile-link {
  .top_border_1px(#fff);
  margin-top: 45px;
  overflow: hidden;
  .profile {
    padding: 20px 10px;
    background-color: @green;
    display: block;
    overflow: hidden;
    .profile-photo {
      float: left;
      width: 60px;
      height: 60px;
      i {
        width: 100%;
        height: 100%;
        font-size: 60px;
        color: #fff;
      }
    }
    .profile-info {
      overflow: hidden;
      padding-left: 15px;
      padding-top: 8px;
      position: relative;
      color: #fff;

      .login {
        display: black;
        font-size: 18px;
        padding-bottom: 8px;
        a {
          font-weight: 700;
          color: #fff;
        }
      }
      .phone {
        font-size: 14px;
        line-height: 16px;
        i {
          font-size: 20px;
        }
      }
    }
  }
}
// 中间数字
.profile-number {
  height: 80px;
  background-color: #fff;
  ul {
    overflow: hidden;
    height: 100%;
    li {
      width: 33.33%;
      text-align: center;
      float: left;
      color: #666;
      height: 100%;
      border-left: 1px solid #ccc;
      .num {
        padding: 15px 5px 10px;
        span {
          font-size: 30px;
          font-weight: 700;
          &.yuan {
            color: #f90;
          }
          &.offer {
            color: #ff5f3e;
          }
          &.fraction {
            color: #6ac20b;
          }
        }
      }
      &:first-child {
        border-left: none;
      }
    }
  }
}
.profile-item {
  margin-top: 10px;
  background-color: #fff;
  ul {
    li {
      height: 53px;
      padding-left: 15px;
      line-height: 53px;
      .logo {
        float: left;
        font-size: 18px;
      }
      div {
        overflow: hidden;
        padding-left: 5px;
        position: relative;
        font-size: 16px;
        .bottom_border_1px(#ccc);
        color: #666;
      }
      &:last-child div {
        .bottom_border_1px(rgba(0, 0, 0, 0));
      }
    }
  }
}
.service {
  margin-top: 10px;
  background-color: #fff;
  height: 53px;
  padding-left: 15px;
  line-height: 53px;
  .logo {
    float: left;
    font-size: 18px;
  }
  div {
    overflow: hidden;
    padding-left: 5px;
    position: relative;
    font-size: 16px;
    color: #666;
  }
}

.icon-dd_active,
.icon-fangzi {
  color: #6ac20b;
}
.icon-jifen {
  color: #ff5f3e;
}
.icon-vip {
  color: #f90;
}
.arrow {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 25px;
}
</style>

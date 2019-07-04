<template>
  <div>
    <div class="pingfen">
      <div class="pingleft">
        <h4>3.6</h4>
        <p class="all">综合评分</p>
        <p class="compare">高于周边商家99%</p>
      </div>
      <div class="ping_right">
        <div class="staritem">
          <star class="star" :rating="3.6" :size="1"/>服务态度
          <span class="starnum">4.1</span>
        </div>
        <div class="staritem">
          <star class="star" :rating="3.6" :size="1"/>商家评价
          <span class="starnum">4.3</span>
        </div>
        <p>
          送达时间
          <span>28分钟</span>
        </p>
      </div>
    </div>
    <div class="jg"></div>
    <div class="pingsearch">
      <div class="pingbtn">
        <div class="all active">全部</div>
        <div class="manyi">满意</div>
        <div class="nomanyi">不满意</div>
      </div>
      <p class="pingjia">
        <i class="iconfont icon-duigou"></i>只看有内容的评价
      </p>
    </div>
    <div class="pinglun">
      <ul>
        <li>
          <div class="pinglogo">
            <img src="" alt="">
          </div>
          <div class="pinginfo">
            <p class="userinfo">
              <span class="user">111111</span>
              <span class="time">2016-07-23 21:52:44</span>
            </p>
            <div class="stars">
              <div class="star">
                <star :rating="3.6" :size="0"/>
              </div>30
            </div>
            <p class="pingconten">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
            <div class="biaoqian">
              <i class="iconfont icon-won"></i>
              <span class="biaoinfo">南瓜粥</span>
              <span class="biaoinfo">南瓜粥</span>
              <span class="biaoinfo">南瓜粥</span>
            </div>
          </div>
        </li>
        <li>
          <div class="pinglogo">
            <img src="" alt="">
          </div>
          <div class="pinginfo">
            <p class="userinfo">
              <span class="user">111111</span>
              <span class="time">2016-07-23 21:52:44</span>
            </p>
            <div class="stars">
              <div class="star">
                <star :rating="3.6" :size="0"/>
              </div>30
            </div>
            <p class="pingconten">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
            <div class="biaoqian">
              <i class="iconfont icon-won"></i>
              <span class="biaoinfo">南瓜粥</span>
              <span class="biaoinfo">南瓜粥</span>
              <span class="biaoinfo">南瓜粥</span>
            </div>
          </div>
        </li>
        <li>
          <div class="pinglogo">
            <img src="" alt="">
          </div>
          <div class="pinginfo">
            <p class="userinfo">
              <span class="user">111111</span>
              <span class="time">2016-07-23 21:52:44</span>
            </p>
            <div class="stars">
              <div class="star">
                <star :rating="3.6" :size="0"/>
              </div>30
            </div>
            <p class="pingconten">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
            <div class="biaoqian">
              <i class="iconfont icon-won"></i>
              <span class="biaoinfo">南瓜粥</span>
              <span class="biaoinfo">南瓜粥</span>
              <span class="biaoinfo">南瓜粥</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import star from '@/components/star/Star.vue'
export default {
  components: { star }
}
</script>

<style lang="less" scoped>
.pingfen {
  padding: 18px 0;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  .pingleft {
    float: left;
    width: 137px;
    border-right: 1px solid #ccc;
    text-align: center;
    h4 {
      color: #f90;
      margin-bottom: 6px;
      line-height: 28px;
      font-size: 24px;
    }
    .all {
      margin-bottom: 8px;
    }
    .compare {
      font-size: 10px;
      line-height: 10px;
      color: #93999f;
    }
  }
}
.ping_right {
  padding: 6px 0 6px 24px;
  overflow: hidden;
  .staritem {
    overflow: hidden;
    margin: 0 0 10px 10px;
    font-size: 12px;
  }
  .star {
    float: left;
    margin-right: 20px;
  }
  .starnum {
    // float: right;
    overflow: hidden;
    color: #f90;
  }
  p {
    font-size: 12px;
    color: #07111b;
    line-height: 18px;
    span {
      margin-left: 15px;
      color: #93999f;
    }
  }
}
.jg {
  height: 18px;
  background-color: #f3f5f7;
  border-bottom: 1px solid #ccc;
}
.pingsearch {
  overflow: hidden;
  padding: 0 18px;
  border-bottom: 1px solid #ccc;
  .pingbtn {
    overflow: hidden;
    margin: 18px 0;
    div {
      float: left;
      padding: 8px 12px;
      margin-right: 8px;
      line-height: 16px;
      border-radius: 1px;
      font-size: 12px;
      color: #4d555d;
      background: rgba(77, 85, 93, 0.2);
      float: left;
    }
    .active {
      background-color: #02a774;
      color: #fff;
    }
  }
  .pingjia {
    color: #93999f;
    padding: 18px 0;
    font-size: 12px;
    i {
      display: inline-block;
      width: 24px;
      height: 24px;
      background-color: #02a774;
      border-radius: 50%;
      text-align: center;
      line-height: 24px;
      color: #fff;
      font-weight: 700;
      margin-right: 10px;
    }
  }
}
.pinglun {
  padding: 0 18px;
  overflow: hidden;
  li {
    padding: 12px 0;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    .pinglogo {
      float: left;
      width: 24px;
      margin-right: 12px;
      background-color: #93999f;
      img {
        display: block;
        width: 24px;
        height: 24px;
        background-color: red;
        border-radius: 50%;
      }
    }
    .pinginfo {
      overflow: hidden;
      font-size: 10px;
      color: #07111b;
      .userinfo {
        line-height: 12px;
        overflow: hidden;
        .user {
          float: left;
        }
        .time {
          float: right;
        }
      }
      .stars {
        overflow: hidden;
        .star {
          float: left;
        }
      }
      .pingconten {
        margin-bottom: 8px;
        line-height: 18px;
        color: #07111b;
        font-size: 12px;
      }
      .biaoqian {
        i {
          color: #f90;
        }
        span {
          display: inline-block;
          border: 1px solid #ccc;
          color: #ccc;
          padding: 3px;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>

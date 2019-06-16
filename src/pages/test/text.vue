<!--<template>
  <div class="wrapper" ref="wrapper">
    <div>
    <ul class="content">
        <li v-for="item in data">{{item}}</li>
      </ul>
      <div class="bottom-tip">
    <span class="loading-hook">查看更多</span>
    </div>
    <div>
  </div>
</template>
<script>

import BScroll from 'better-scroll'
export default {
  data () {
    return {
      data: []
    }
  },
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      var self = this
      // ajax请求
      requestData().then((res) => {
        this.data = res.data.concat(this.data)
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new Bscroll(this.$refs.wrapper, {
              pullUpLoad: {
                threshold: -30 // 负值是当上拉到超过低部 30px；正值是距离底部距离时，
              }
            })
            // 下拉
            this.scroll.on('touchend', (pos) => {
              // 下拉动作
              if (pos.y > 50) {
                self.loadData()
              }
            })
            // 上拉加载
            this.scroll.on('pullingUp', (pos) => {
              document.querySelector('.loading-hook').innerText = '加载中...'
              setTimeout(function () {
                // 恢复文本值
                document.querySelector('.loading-hook').innerText = '查看更多'
                // 向列表添加数据
                self.loadData()
              }, 1000)
            })
          } else {
            // 当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载
            this.scroll.finishPullUp()
            // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
            this.scroll.refresh()
          }
        })
      })
    }
  }
}
</script>
-->

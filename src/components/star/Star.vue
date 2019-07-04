<template>
  <div class="stars" :class="size===1?'big':''">
    <span class="star" :class="item" v-for="(item,index) in starClasses" :key="index"></span>
  </div>
</template>
<script>
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'
export default {
  data: function () {
    return {}
  },
  props: ['rating', 'size'],
  computed: {
    starClasses () {
      const { rating } = this
      const src = []
      let scoreInteger = Math.floor(rating)
      for (let i = 1; i <= scoreInteger; i++) {
        src.push(CLASS_ON)
      }
      if (rating * 10 - scoreInteger * 10 > 5) {
        src.push(CLASS_HALF)
      }
      while (src.length < 5) {
        src.push(CLASS_OFF)
      }

      return src
    }
  }
}
</script>

<style lang="less" scoped>
.stars {
  overflow: hidden;
  .star {
    width: 10px;
    height: 10px;
    margin-right: 3px;
    background-size: 100%;
    display: inline-block;
  }
  .on {
    background-image: url('./stars/star24_on@3x.png');
  }
  .half {
    background-image: url('./stars/star48_half@3x.png');
  }
  .off {
    background-image: url('./stars/star48_off@3x.png');
  }
  &.big {
    .star {
      width: 15px;
      height: 15px;
      margin-right: 3px;
      background-size: 100%;
      display: inline-block;
    }
    .on {
      background-image: url('./stars/star24_on@3x.png');
    }
    .half {
      background-image: url('./stars/star48_half@3x.png');
    }
    .off {
      background-image: url('./stars/star48_off@3x.png');
    }
  }
}
</style>

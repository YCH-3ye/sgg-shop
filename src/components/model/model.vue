<template>
  <div class="model">
    <!-- bounceInDown -->
    <div class="content animated bounceInDown">
      <div class="icon">
        <i></i>
        <i></i>
      </div>
      <span>
        <slot></slot>
      </span>
      <button @click="isShowModelHandle">确认</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    // 不需要给父组件传递参数的逻辑都在父组件当中只要把$emit要父组件执行以下就好了
    isShowModelHandle () {
      this.$emit('getHandleModel')
    }
  }
}
</script>

<style lang="less" scoped>
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

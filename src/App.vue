<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  created () {
    console.log(1)
    this.resOuteUser()
  },
  methods: {
    ...mapActions(['resOuteUser']),
    reload () {
      this.isRouterAlive = false
      // console.log(111)
      this.$nextTick(function () {
        // console.log(222)
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: relative;
}
</style>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png" />
    <br />
    <br />
    vueX 数据测试
    {{this.$store.state.ceshi}}
    <br />
    <br />--组件测试--
    <br />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="clearfloat">
      <div class="right">456</div>
      <div class="left">789</div>
    </div>
    <div>123</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created () {
    // 请求测试
    this.$http.getSecurityCode().then(res => {
      console.log(res)
    })
    this.$http.getSecurityCode2().then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
</style>

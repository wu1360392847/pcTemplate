<template>
  <div class="home">
    Home
    <br />
    <br />
    vueX 数据测试
    {{this.$store.state.ceshi}}
    <br />
    <br />--组件测试--
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld1 msg="Welcome to Your Vue.js App" />
    <div class="clearfloat">
      <div class="right">456</div>
      <div class="left">789</div>
    </div>
    <div>123</div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorld1 from '@/components/HelloWorld1.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    HelloWorld1
  },
  created () {
    // 请求测试
    this.$http.getCategories().then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped lang="scss">
</style>

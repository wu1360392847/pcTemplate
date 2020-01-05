<template>
  <div id="app">
    <!-- name 加名字进行页面跳转 -->
    <!-- header，section，footer -->
    <header></header>
    <section></section>
    <footer></footer>
    <router-view name="mainWindow"></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view name="mainWindow" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', '宋体', Tahoma;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // 样式重置
  color: $font-color-small;
  font-size: $font-size-small;
  background: $bg-color-small;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $font-color-small;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

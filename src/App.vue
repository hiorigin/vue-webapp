<template>
  <div id="app">
    <router-view name="header"></router-view>
    <img src="./assets/images/logo.png">
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  body {
    font-size: 16px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  ul {
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    list-style: none;
    width: 20%;
  }
  #app {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 60px;
  }
</style>

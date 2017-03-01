<template>
    <div id="app">
        <router-view name="search"></router-view>
        <router-view name="header"></router-view>
        <router-view></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {

        }
    }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
html, body {
    width: 100%;
    height: 100%;
}
body {
    position: relative;
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
    width: 100%;
    height: 100%;
    text-align: center;
    color: #2c3e50;
    margin-bottom: 60px;
}
</style>

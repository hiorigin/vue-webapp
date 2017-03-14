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
@import './assets/less/common';
.reset();
#app {
    width: 100%;
    height: 100%;
    color: #2c3e50;
}
</style>

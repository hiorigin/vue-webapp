<template>
    <div id="app" @touchmove="touchMove($event)">
        <router-view></router-view>
    </div>
</template>

<script>
    import Util from '@/util'
    export default {
        name: 'app',
        data(){
            return {

            }
        },
        methods:{
            touchMove(ev){
                let searchBar = Util.id('search');
//                searchBar.style.backgroundColor = '#f06';
            }
        }
    }
</script>

<style lang="less">
    @import "../static/less/normalize";
    @import "../static/less/app";
    #app {
        height: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>

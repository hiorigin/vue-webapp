<template>
    <section class="subbanner">
        <a href="javascript:;">
            <img src="/static/img/subbanner.png" alt="subbanner">
        </a>
    </section>
</template>

<script>
    export default {
        name: 'subbanner',
        data(){
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../static/less/common";
    .subbanner{
        background-color: #E8E8ED;
        overflow: hidden;
        .clearfix();
        a{
            display: block;
            margin: 10px 0;
        }
        img{
            display: block;
            width: 100%;
            height: auto;
        }
    }
</style>

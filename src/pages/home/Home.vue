<template>
    <div class="home">
        <section>
            
        </section>
    </div>
</template>

<script>
    import Util from '@/util/util'
    export default {
        name: 'home',
        data(){
            return {
                title: '京东购物'
            }
        },
        mounted () {
            this.$nextTick(function(){
                Util.setTitle(this.title);
            });
        },
        methods: {
            
        }
    }
</script>

<style lang="less" scoped>
    .home{
        h1{
            font-size: 20px;
            color: #f06;
        }
    }
</style>
<template>
    <div class="home">
        <section>
            
        </section>
    </div>
</template>

<script>
    import Store from '@/store/store'
    export default {
        name: 'home',
        data(){
            return {
                title: '京东购物'
            }
        },
        mounted () {
            this.$nextTick(function(){
                Store.setTitle(this.title);
            });
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
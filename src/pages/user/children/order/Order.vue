<template>
    <div class="order">
        <h1>我的订单</h1>
    </div>
</template>
<script>
import Store from '@/store/store';
    export default {
        name: 'order',
        data(){
        return {
                title: '我的订单'
            }
        },
        mounted(){
            this.$nextTick(function(){
                Store.setTitle(this.title);
            });
        }
    }
</script>
<style lang="less" scoped>
    
</style>
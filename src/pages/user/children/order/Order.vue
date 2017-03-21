<template>
    <div class="order">
        <h1>我的订单</h1>
        <quick-menu></quick-menu>
    </div>
</template>
<script>
import Util from '@/util/util';
export default {
    name: 'order',
    data(){
    return {
            title: '我的订单'
        }
    },
    mounted(){
        this.$nextTick(function(){
            Util.setTitle(this.title);
        });
    }
}
</script>
<style lang="less" scoped>
    
</style>
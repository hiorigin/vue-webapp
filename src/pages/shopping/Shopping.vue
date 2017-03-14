<template>
	<h1>Shopping Pages</h1>
</template>

<script>
import Store from '@/store/store';
export default {
    name: 'shopping',
    data() {
        return {
            title: '购物圈'
        }
    },
    mounted(){
        this.$nextTick(function(){
            Store.setTitle(this.title);
        });
    }
}
</script>

<style lang="less">

</style>

<template>
	<h1>Shopping Pages</h1>
</template>

<script>
import Util from '@/util/util'
export default {
    name: 'shopping',
    data() {
        return {
            title: '购物圈'
        }
    },
    mounted(){
        this.$nextTick(function(){
            Util.setTitle(this.title);
        });
    }
}
</script>

<style lang="less">

</style>

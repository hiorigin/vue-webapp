<template>
	<h1>Portal Pages</h1>
</template>

<script>
import Store from '@/store/store'
export default {
    name: 'portal',
    data() {
        return {
            title: '分类'
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

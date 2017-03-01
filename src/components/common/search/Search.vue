<template>
	<div class="search-wrap">

	</div>
</template>

<script>
export default {
    name: 'saerch',
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
@searchWrapHeight: 46px;
.search-wrap {
    position: fixed;
    top: 0;
    width: 100%;
    height: @searchWrapHeight;
    background-color: #f06;
    z-index: 99999;
}
</style>

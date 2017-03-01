<template>
	<header class="header">
		<div class="header-nav">
			
		</div>
	</header>
</template>

<script>
	export default {
		name: 'header',
		data() {
			return {

			}
		}
	}
</script>
	
<style lang="less" scoped>
	@headerHeight: 46px;

	.header {
		position: fixed;
		top: 0;
		width: 100%;
		height: @headerHeight;
		line-height: @headerHeight;
		// background-color: rgba(255,255,255,0);
		background-color: #f06;
		-webkit-tap-highlight-color: rgba(255,255,255,0);
		overflow: hidden;

		&-nav {
			margin: 0 10px;
			height: @headerHeight;
		}
	}
</style>

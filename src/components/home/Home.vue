<template>
	<div class="home">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				msg: 'Hello From WebApp'
			}
		}
	}
</script>

<style lang="less" scoped>
	.home {
		font-size: 30px;
		h1 {
			font-size: 2rem;
			color: #f06;
		}
	}
</style>
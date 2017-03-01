<template>
	<footer class="footer">
		<ul class="footer-nav">
			<li class="nav-item">
				<a href="#/home">首页</a>
			</li>
			<li>
				<a href="#/portal">分类</a>
			</li>
			<li>
				<a href="#/shopping">购物圈</a>
			</li>
			<li>
				<a href="#/cart">购物车</a>
			</li>
			<li>
				<a href="#/user">个人中心</a>
			</li>
		</ul>
	</footer>
</template>

<script>
	export default {
		name: 'footer',
		data () {
			return {

			}
		}
	}
</script>

<style lang="less" scoped>
    @footerNavHeight: 48px;
    @colorItemLink: #222;
    @colorItemHover: #f06;
    @fontSize: .8rem;

	.footer{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: @footerNavHeight;
		line-height: @footerNavHeight;
		font-size: @fontSize;
		background-color: #ddd;
		overflow: hidden;

		&-nav {
			z-index: 99999;

			li {
				height: @footerNavHeight;
				line-height: @footerNavHeight;
				float: left;
				text-align: center;
			}

			a {
				display: block;
				width: 100%;
				height: @footerNavHeight;
				line-height: @footerNavHeight;
        color: @colorItemLink;

        &:hover {
          color: @colorItemHover;
        }
			}
		}
	}
</style>

<template>
	<footer class="footer">
		<ul class="footer-nav">
			<li class="nav-item">
				<a href="#/home">
                    <div class="nav-icon">
                        <span class="iconfont icon-zhidai icon-item"></span>
                    </div>
                    <p class="nav-label"><span>首页</span></p>
                </a>
			</li>
			<li class="nav-item">
				<a href="#/portal">
                    <div class="nav-icon">
                        <span class="iconfont icon-fenlei icon-item"></span>
                    </div>
                    <p class="nav-label"><span>分类</span></p>
                </a>
			</li>
			<li class="nav-item">
				<a href="#/shopping">
                    <div class="nav-icon">
                        <span class="iconfont icon-item icon-cri"></span>
                    </div>
                    <p class="nav-label icon-label-cri"><span>购物圈</span></p>
                </a>
			</li>
			<li class="nav-item">
				<a href="#/cart">
                    <div class="nav-icon">
                        <span class="iconfont icon-gouwuche icon-item"></span>
                    </div>
                    <p class="nav-label"><span>购物车</span></p>
                </a>
			</li>
			<li class="nav-item">
				<a href="#/user">
                    <div class="nav-icon">
                        <span class="iconfont icon-user icon-item"></span>
                    </div>
                    <p class="nav-label"><span>个人中心</span></p>
                </a>
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
    @import "../../assets/font/iconfont.css";
    @footerNavHeight: 50px;
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
        border-top: 1px solid #ccc;
        box-sizing: border-box;

		&-nav {
			z-index: 9999;

			li {
                width: 20%;
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
                font-size: 0;
                text-align: center;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
			}
		}

        .nav-icon {
            position: relative;
            display: inline-block;
            width: 36px;
            height: 27px;

            span {
                position: relative;
                top: -9px;
                &:nth-child(2) .iconfont {
                    font-size: 20px;
                }
            }

            .icon-cri {
                position: absolute;
                top: -12px;
                display: block;
                width: 35px;
                height: 35px;
                border: 1px solid #fff;
                border-radius: 50%;
                background: url("../../assets/images/logo.png");
                background-size: cover;
            }
        }
        .nav-label {
            margin-top: -28px;
            text-align: center;
            color: #999;
            font-size: 10px;
            line-height: 1.8;
            span {
                display: block;
                width: 100%;
                
            }
        }
        .icon-label-cri{
            margin-top: -25px;
        }
	}
</style>

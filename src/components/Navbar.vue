<template>
    <section id="navbar" class="navbar">
        <ul class="navbar-nav">
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
    </section>
</template>

<script>
    export default {
        name: 'navbar',
        data(){
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    @import "/static/font/iconfont.css";
    @navbarNavHeight: 50px;
    @colorItemLink: #222;
    @colorItemHover: #f06;
    @fontSize: .8rem;

    .navbar{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: @navbarNavHeight;
        line-height: @navbarNavHeight;
        font-size: @fontSize;
        background-color: #ddd;
        border-top: 1px solid #ccc;
        box-sizing: border-box;
        z-index: 100;

        &-nav {
            z-index: 9999;

            li {
                width: 20%;
                height: @navbarNavHeight;
                line-height: @navbarNavHeight;
                float: left;
                text-align: center;
            }

            a {
                display: block;
                width: 100%;
                height: @navbarNavHeight;
                line-height: @navbarNavHeight;
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
                background: url("/static/img/logo.png");
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

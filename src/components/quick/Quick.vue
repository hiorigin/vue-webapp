<template>
    <div class="quick">
        <!--快捷导航-->
        <nav class="quick-nav" :class="{ show:  isOverlay }">
            <!--<span @click="changeShow($event)">快速 导航</span>-->
            <div class="quick-menu">
                <span class="menu-text" @click="isOverlay = !isOverlay">{{menuText}}</span>
            </div>
            <ul class="quick-tab">
                <li class="quick-list">
                    <a class="quick-item" href="#/home" @click="isOverlay = !isOverlay">
                        <div class="nav-icon">
                            <span class="iconfont icon-gouwuche icon-item"></span>
                        </div>
                        <p class="nav-label">首页</p>
                    </a>
                </li>
                <li class="quick-list">
                    <a class="quick-item" href="#/portal" @click="isOverlay = !isOverlay">
                        <div class="nav-icon">
                            <span class="iconfont icon-gouwuche icon-item"></span>
                        </div>
                        <p class="nav-label">搜索</p>
                    </a>
                </li>
                <li class="quick-list">
                    <a class="quick-item" href="#/user" @click="isOverlay = !isOverlay">
                        <div class="nav-icon">
                            <span class="iconfont icon-gouwuche icon-item"></span>
                        </div>
                        <p class="nav-label">个人中心</p>
                    </a>
                </li>
                <li class="quick-list">
                    <a class="quick-item" href="#/user" @click="isOverlay = !isOverlay">
                        <div class="nav-icon">
                            <span class="iconfont icon-gouwuche icon-item"></span>
                        </div>
                        <p class="nav-label">收藏</p>
                    </a>
                </li>
                <li class="quick-list">
                    <a class="quick-item" href="#/user" @click="isOverlay = !isOverlay">
                        <div class="nav-icon">
                            <span class="iconfont icon-gouwuche icon-item"></span>
                        </div>
                        <p class="nav-label">最近浏览</p>
                    </a>
                </li>
                <li class="quick-list">
                    <a class="quick-item" href="#/user" @click="isOverlay = !isOverlay">
                        <div class="nav-icon">
                            <span class="iconfont icon-gouwuche icon-item"></span>
                        </div>
                        <p class="nav-label">用户反馈</p>
                    </a>
                </li>
                <li class="quick-list">
                    <a class="quick-item" href="#/user" @click="isOverlay = !isOverlay">
                        <div class="nav-icon">
                            <span class="iconfont icon-gouwuche icon-item"></span>
                        </div>
                        <p class="nav-label">药品清单</p>
                    </a>
                </li>
            </ul>
        </nav>
        <div id="overlay" class="overlay" :class="{ show:  isOverlay }" v-if="isOverlay != false"></div>
    </div>
</template>
<script>
    import Store from '@/store/store'
    
    export default {
        name: 'quick',
        data() {
            return {
                menuText: '快速导航',
                isOverlay: false
            }
        },
        watch: {
            isOverlay: function(){
                Store.body.style.overflow = this.isOverlay ? "hidden" : "";
                Store.body.style.position = this.isOverlay ? "fixed" : "";
                this.menuText = this.isOverlay ? "收起" : "快速导航";
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="less" scoped>
    .quick-nav {
        display: block;
        position: fixed;
        right: -225px;
        bottom: 95px;
        width: 225px;
        height: 106px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background-color: #fff;
        -webkit-transition: right .5s;
        transition: right .5s;
        z-index: 100001;

        .quick-menu {
            display: block;
            position: absolute;
            right: 225px;
            top: 35px;
            font-size: 10px;
            color: #fff;
            width: 46px;
            height: 36px;
            line-height: 36px;
            text-align: right;
            background: rgba(0, 0, 0, .5);
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            cursor: pointer;
            -webkit-transition: right .5s;
            transition: right .5s;
            .menu-text{
                // display: block;
                width: 28px;
                // height: 28px;
                // line-height: 1;
                letter-spacing: 2px;
                margin-right: 2px;
                // margin-top: 5px;
            }
        }
        .quick-tab{
            height: 100%;
            padding: 7px 0;
        }

        .quick-list{
            width: 25%;
            height: 42px;
            line-height: 42px;
            float: left;
            a{
                position: relative;
                display: block;
                height: 42px;
                text-align: center;
                .nav-icon{
                    position: relative;
                    display: inline-block;
                    width: 100%;
                    height: 27px;
                    text-align: center;
                    span{
                        display: block;
                        width: 100%;
                        position: absolute;
                        top: -9px;
                    }
                }
                .nav-label{
                    margin-top: -24px;
                    text-align: center;
                    color: #999;
                    font-size: 10px;
                    line-height: 1.8;
                }
            }
        }
        @keyframes quick-move {
            from {right: -225px;}
            to {right: 0;}
        }
        @-webkit-keyframes quick-move {
            from {right: -225px;}
            to {right: 0;}
        }
    }
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: -100%;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        -webkit-transition: right .5s;
        transition: right .5s;
        overflow: hidden;
        z-index: 100000;
    }
    .show {
        right: 0;
        -webkit-transition: right .5s;
        transition: right .5s;
    }
</style>
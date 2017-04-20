<template>
    <section class="portal">
        <search></search>
        <div class="portal-wrap">
            <div class="nav-list">
                <ul class="portal-nav" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
                    <li v-for="(items, index) in titleData" class="nav-item">
                        <a @click="activeIndex = index" :class="{active: index == activeIndex}" href="javascript:;">{{items.title}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="portal-wrap">
            <div class="wrap-list">
                <section v-for="hot in hotData">
                    <div class="portal-focus">
                        <img :src="hot.img" alt="focus-pic">
                    </div>
                    <div class="portal-title">{{hot.title}}</div>
                </section>
                <ul class="portal-content">
                    <li v-for="items in contentData[activeIndex]" class="content-item">
                        <a href="">
                            <div class="img-wrap">
                                <img :src="items.img" alt="focus-pic">
                            </div>
                            <p>{{items.title}}</p>
                        </a>
                    </li>
                </ul>
                <div v-show="!contentData[activeIndex]">暂没有数据！</div>
            </div>
        </div>
        <navbar></navbar>
    </section>
</template>

<script>
    import Util from '@/util'
    import Search from '@/components/Search'
    export default {
        name: 'portal',
        components: { Search },
        data() {
            return {
                title: '搜索',
                activeIndex: 0,
                titleData: [
                    {
                        title: '特搜推荐'
                    },
                    {
                        title: '手机数码'
                    },
                    {
                        title: '女装内衣'
                    },
                    {
                        title: '男装内衣'
                    },
                    {
                        title: '家用电脑'
                    },
                    {
                        title: '鞋靴箱包'
                    },
                    {
                        title: '运动户外'
                    },
                    {
                        title: '电脑办公'
                    },
                    {
                        title: '个护化妆'
                    },
                    {
                        title: '家具建材'
                    },
                    {
                        title: '家居家纺'
                    },
                    {
                        title: '母婴童装'
                    }
                ],
                contentData: [
                    [
                        {
                            title: '手机',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '手机',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '手机',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '手机',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '手机',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '手机',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '手机',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '手机',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '手机',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '手机',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '手机',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '手机',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '手机',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '手机',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '手机',
                            img: '/static/img/vux_logo.png'
                        }
                    ],
                    [
                        {
                            title: '数码',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '数码',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '数码',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '数码',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '数码',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '数码',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '数码',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '数码',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '数码',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '数码',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '数码',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '数码',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '数码',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '数码',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '数码',
                            img: '/static/img/vux_logo.png'
                        }
                    ],
                    [
                        {
                            title: '女装',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '女装',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '女装',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '女装',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '女装',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '女装',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '女装',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '女装',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '女装',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '女装',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '女装',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '女装',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '女装',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '女装',
                            img: '/static/img/vux_logo.png'
                        },
                        {
                            title: '女装',
                            img: '/static/img/vux_logo.png'
                        }
                    ]
                ],
                hotData: [{
                    title: "本周热搜",
                    img: '/static/img/logo.png'
                }]
            }
        },
        mounted(){
            this.$nextTick(function(){
                Util.setTitle(this.title);
            });
        },
        methods: {
            // TODO 待实现上下滑动功能
            touchStart(ev){
            },
            touchMove(ev){
            },
            touchEnd(ev){
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../../static/less/common";
    .search{
        border-bottom: 1px solid #F2F2F2;
    }
    .portal{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-flow: row;
        flex-flow: row;
        overflow: hidden;
        &-wrap{
            height: 100%;
            margin: 45px 0;
        }
        &-wrap:nth-child(2){
            float: left;
            /*padding: 0 10px;*/
        }
        .nav-list{
            background-color: #F0F0F5;
        }
        .wrap-list{
            padding: 10px 10px 0;
            background-color: #fff;
            .clearfix();
        }
        &-nav{
            width: 90px;
            background-color: #EFF0F4;
            li{
                border-bottom: 1px solid #E5E6EA;
            }
            .nav-item, a{
                display: block;
                width: 100%;
                height: 40px;
                line-height: 40px;
                color: #666;
                text-align: center;
            }
            a.active{
                background-color: #fff;
                color: #f06;
            }
        }
        &-content{
            flex: 1;
            width: 100%;
            // height: 100%;
            background-color: #f06;
            li{
                width: 33.333%;
                height: auto;
                float: left;
                box-sizing: border-box;
                margin-bottom: 5px;
                // overflow: hidden;
                .img-wrap{
                    height: auto;
                    background-color: #F8F8F8;
                    // overflow: hidden;
                }
                img{
                    width: 100%;
                    height: auto;
                }
                p{
                    height: 25px;
                    line-height: 25px;
                    font-size: 12px;
                    margin: 0;
                    text-align: center;
                    padding-top: 2px;
                    color: #666;
                }
                &:nth-child(n){
                    padding-right: 2px;
                    box-sizing: border-box;
                }
                &:nth-child(3n){
                    width: 33.133%;
                    padding-right: 0;
                }
            }
        }
        &-focus{
            width: 100%;
            height: 85px;
            margin: 10px 0;
            background-color: green;
            text-align: center;
            img{
                width: auto;
                height: 100%;
            }
        }
        &-title{
            padding-bottom: 10px;
        }
    }
</style>

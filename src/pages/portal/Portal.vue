<template>
	<div class="portal">
        <div class="portal-wrap">
            <ul class="portal-nav">
                <li v-for="title in titleData" class="nav-item">
                    <a class="active" href="#/">{{title.title}}</a>
                </li>
            </ul>
        </div>
        <div class="portal-wrap">
            <section v-for="hot in hotData">
                <div class="portal-focus">
                    <img :src="hot.img" alt="focus-pic">
                </div>
                <div class="portal-title">{{hot.title}}</div>
            </section>
            <ul class="portal-content">
                <li v-for="item in contentData" class="content-item">
                    <a href="">
                        <div class="img-wrap">
                            <img :src="item.img" alt="focus-pic">
                        </div>
                        <p>{{item.title}}</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Util from '@/util/util'
export default {
    name: 'portal',
    data() {
        return {
            title: '搜索',
            titleData: [
                {
                    title: '特搜推荐'
                },
                {
                    title: '特搜推荐'
                },
                {
                    title: '特搜推荐'
                },
                {
                    title: '特搜推荐'
                },
                {
                    title: '特搜推荐'
                },
                {
                    title: '特搜推荐'
                },
                {
                    title: '特搜推荐'
                }
            ],
            contentData: [
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
    }
}
</script>

<style lang="less" scoped>
    .portal{
        width: 100%;
        height: 100%;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-flow: row;
        flex-flow: row;
        &-wrap{
            height: 100%;
            margin: 50px 0;
        }
        &-wrap:nth-child(2){
            padding: 0 10px;
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
                text-align: center;
            }
            a.active{
                background-color: #fff;
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
                    text-align: center;
                    padding-top: 2px;
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

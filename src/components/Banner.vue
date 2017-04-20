<template>
    <section id="banner" class="banner">
        <ul @touchstart="touchStart($event)"
            @touchmove="touchMove($event)"
            @touchend="touchEnd($event)"
            id="banner-list" class="banner-list">
            <slot name="banner-item">
                <li v-for="pic in picData" class="banner-item">
                    <img :src="pic" alt="img">
                </li>
            </slot>
        </ul>
        <div id="pic-mask" class="pic-mask">
            <!--<a href="javascript:;" class="active"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>-->
        </div>
    </section>
</template>

<script>
    import Util from '@/util'
    export default {
        name: 'banner',
        data(){
            return {
                picData: [
                    '/static/img/slider/slider-1.jpg',
                    '/static/img/slider/slider-2.jpg',
                    '/static/img/slider/slider-3.jpg',
                    '/static/img/slider/slider-4.jpg',
                    '/static/img/slider/slider-5.jpg',
                    '/static/img/slider/slider-6.jpg'
                ],
                picList: undefined,
                picItem: undefined,
                picItemLen: 0,
                picMaskItem: undefined,
                picMaskWrap: '',
                iScroll: 0,
                iStartTouchX: 0,
                iNow: 0,
                iW: Util.view().w,
                iDis : 0,
                iNub: 0,
                oTimer: null
            }
        },
        mounted(){
            this.$nextTick(function(){
                this.init();
            });
        },
        methods:{
            init(){
                this.picList = Util.id('banner-list');
                this.picItem = this.picList.children;
                this.picMaskWrap = Util.id('pic-mask');
                this.picMaskItem = Util.id('pic-mask').children;
                this.setPicList();
                this.autoPlay();
            },
            autoPlay(){
                this.oTimer = setInterval(()=> {
                    this.iNow++;
                    this.next();
                }, 3000);
            },
            touchStart(ev){
                clearInterval(this.oTimer);
                if (this.iNow <= 0){
                    this.iNow += this.picMaskItem.length;
                    this.iScroll = -this.iNow * this.iW;
                    this.picList.style.WebkitTransform = this.picList.style.transform = 'translateX('+ this.iScroll +'px)';
                }
                this.picList.style.WebkitTransition = this.picList.style.transition = 'none';
                this.iStartTouchX = ev.changedTouches[0].pageX;
                this.iStartX = this.iScroll;
            },
            touchMove(ev){
                this.iDis = ev.changedTouches[0].pageX - this.iStartTouchX;
                this.iScroll = this.iStartX + this.iDis;
                this.picList.style.WebkitTransform = this.picList.style.transform="translateX("+ this.iScroll +"px)";
            },
            touchEnd(ev){
                this.iDis = ev.changedTouches[0].pageX - this.iStartTouchX;
                this.iNub = Math.round(this.iDis/this.iW);
                this.iNow -= this.iNub;
                this.next();
                this.autoPlay();
            },
            next(){
                this.iScroll = -this.iNow * this.iW;
                this.picList.style.WebkitTransition = this.picList.style.transition = '.5s';
                for (let i = 0; i < this.picMaskItem.length; i++){
                    this.picMaskItem[i].className = '';
                }
                this.picMaskItem[this.iNow%this.picMaskItem.length].className = 'active';
                if (this.iNow >= this.picMaskItem.length){
                    this.picList.style.WebkitTransform = this.picList.style.transform = 'translateX('+ this.iScroll +'px)';
                    setTimeout(()=> {
                        this.iNow = this.iNow%this.picItemLen;
                        this.iScroll = -this.iNow * this.iW;
                        this.picList.style.WebkitTransform = this.picList.style.transform = 'translateX('+ this.iScroll +'px)';
                    }, 24);
                } else {
                    this.picList.style.WebkitTransform = this.picList.style.transform = 'translateX('+ this.iScroll +'px)';
                }
            },
            setPicList(){
                let len = this.picList.children.length,
                    str = '<a href="javascript:;"></a>',
                    html = '';
                this.picList.innerHTML += this.picList.innerHTML;
                this.picItemLen = this.picItem.length;
                this.picList.style.width = this.iW * this.picItemLen + 'px';
                for (let i = 0; i < this.picItemLen; i++){
                    this.picItem[i].style.width = this.iW + 'px';
                }
                for (let i = 0; i < len; i++){
                    html += str;
                }
                this.picMaskWrap.innerHTML = html;
                this.picMaskItem[0].className = 'active';
            }
        }
    }
</script>

<style lang="less" scoped>
    .banner{
        position: relative;
        width: 100%;
        overflow: hidden;
        .banner-list{
            width: 400%;
            overflow: hidden;
            .banner-item{
                width: 25%;
                float: left;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
        }
    }
    #pic-mask{
        display: block;
        position: absolute;
        bottom: 10px;
        left: 0;
        width: 100%;
        height: 10px;
        padding: .1rem 0;
        text-align: center;
        a{
            display: block;
            width: 4px;
            height: 4px;
            border-radius: 2px;
            border: 1px solid #fff;
            margin: 0 3px;
            /*background-color: rgba(0, 0, 0, .3);*/
            vertical-align: middle;
            .active{
                background-color: #f06;
            }
        }
    }
</style>

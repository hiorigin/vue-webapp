<template>
    <section class="subnav">
        <ul class="subnav-list">
            <slot name="subnav-item">
                <li v-for="items in picData" class="subnav-item">
                    <a href="javascript:;">
                        <img :src="items.img" alt="sub">
                        <span>{{items.name}}</span>
                    </a>
                </li>
            </slot>
            <!--<li class="subnav-item">-->
                <!--<a href="javascript:;">-->
                    <!--<img src="/static/img/subnav/sub-lq.jpg" alt="sub">-->
                    <!--<span>领券中心</span>-->
                <!--</a>-->
            <!--</li>-->
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'subnav',
        data(){
            return {
                picData: [
                    {img: '/static/img/subnav/sub-lq.jpg', name: '领券中心'},
                    {img: '/static/img/subnav/sub-py.png', name: '拼便宜'},
                    {img: '/static/img/subnav/sub-gl.png', name: '好物攻略'},
                    {img: '/static/img/subnav/sub-cl.png', name: '我的俱乐部'},
                    {img: '/static/img/subnav/sub-all.jpg', name: '全部频道'}
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../static/less/common";
    .subnav{
        margin: 5px 0 10px;
        overflow: hidden;
        .clearfix();

        .subnav-list{
            display: block;
            width: 100%;
            .clearfix();

            .subnav-item{
                display: inline-block;
                width: 20%;
                text-align: center;
                float: left;
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
                img {
                    display: block;
                    width: 40px;
                    height: 40px;
                    margin: 0 auto;
                }
                span{
                    display: block;
                    margin-top: 5px;
                    font-size: 12px;
                    color: #666;
                }
            }
        }
    }
</style>

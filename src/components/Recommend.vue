<template>
    <section class="recommend">
        <div class="rec-title">
            <a class="title-inner" href="javascript:;">
                <h2>趣好货</h2>
                <span>今日上新80款高颜值好货</span>
            </a>
        </div>
        <div class="rec-content">
            <div class="rec-new-goods">
                <div class="rec-new-goods-title">
                    <span>
                        <i>今日有好货</i>
                    </span>
                </div>
                <ul class="rec-new-goods-list">
                    <li class="rec-new-goods-item">
                        <a class="rec-item-inner" href="javascript:;">
                            <div class="rec-item-img-wrap">
                                <img src="/static/img/user-bg.png" alt="img" />
                            </div>
                            <div class="rec-item-content">
                                <p class="rec-item-name">【京东超市】阿联酋进口 酋长 椰枣（弗哈德）1kg</p>
                                <p class="rec-item-desc">选用高品质椰枣，大小均匀，果实饱满，色泽盈润，果肉亮黄，皮薄肉厚</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <ul class="rec-new-goods-show">
                <li class="rec-show-item">
                    <a href="javascript:;">
                        <img src="/static/img/user-bg.png" alt="logo" />
                    </a>
                </li>
                <li class="rec-show-item">
                    <a href="javascript:;">
                        <img src="/static/img/user-logo.png" alt="logo" />
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'recommend',
        data(){
            return {

            }
        },
        methods:{
            // TODO 待完成左右滑动功能
        }
    }
</script>

<style lang="less" scoped>
    @import "../../static/less/common";
    p{
        margin: 0;
    }
    .recommend{
        overflow: hidden;
        .rec-title{
            .title-inner{
                display: block;
                height: 40px;
                line-height: 40px;
                padding: 0 10px;
                position: relative;
                background: #fff;
                color: #f06;
            }
            h2{
                position: relative;
                font-size: 16px;
            }
            span{
                position: absolute;
                right: 10px;
                top: 0;
                font-size: 12px;
                color: #999;
                &:before{
                    content: "\20";
                    display: block;
                    width: 10px;
                    height: 10px;
                    border-top: 1px solid #fff;
                    border-right: 1px solid #fff;
                    position: absolute;
                    right: 3px;
                    top: 14px;
                    -webkit-transform: rotate(45deg) scale(.5);
                    transform: rotate(45deg) scale(.5);
                }
                &:after{
                    content: "\20";
                    display: inline-block;
                    vertical-align: middle;
                    margin: -2px 0 0 4px;
                    width: 15px;
                    height: 15px;
                    border-radius: 15px;
                    background-color: #ff302d;
                }
            }
        }
        .rec-content{
            position: relative;
            .clearfix();

        }
        .rec-new-goods{
            background-color: #FFE7EB;
            overflow: hidden;
            .clearfix();
            .rec-new-goods-title{
                display: table;
                position: absolute;
                top: 0;
                left: 0;
                width: 35px;
                height: 150px;
                text-align: center;
                background-color: #FFCFD7;
                z-index: 2;
                span{
                    display: table-cell;
                    height: 100%;
                    vertical-align: middle;
                }
                i{
                    display: inline-block;
                    font-style: normal;
                    width: 16px;
                    color: #df0126;
                    font-weight: 700;
                }
            }
            .rec-new-goods-list{
                height: 130px;
                padding: 10px 0 10px 35px;
                overflow: hidden;
                /*overflow-x: auto;*/
            }
            .rec-new-goods-item{
                display: inline-block;
                width: 300px;
                margin-left: 5px;
                vertical-align: top;
                float: left;
                .rec-item-inner{
                    position: relative;
                    display: block;
                    height: 130px;
                    background-color: #fff;
                    padding: 10px 10px 10px 140px;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    .rec-item-img-wrap{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 130px;
                        height: 130px;
                        img{
                            display: block;
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .rec-item-name{
                        font-size: 16px;
                        color: #333;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .rec-item-desc{
                        height: 3em;
                        line-height: 1.5em;
                        font-size: 12px;
                        color: #999;
                        white-space: normal;
                        margin-bottom: 5px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                }
            }
        }
        .rec-new-goods-show{
            position: relative;
            overflow: hidden;
            .rec-show-item{
                width: 50%;
                height: 4.375rem;
                float: left;
                display: block;
                position: relative;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>

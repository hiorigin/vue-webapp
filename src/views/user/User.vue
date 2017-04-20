<template>
    <section class="user">
        <div class="user-info">

        </div>
        <div class="user-news"></div>
        <div class="user-form user-order">
            <div class="form-title">
                <span class="title-label">我的订单</span>
                <a class="title-link" href="#/order">查看全部订单</a>
            </div>
            <ul class="form-content">
                <li>
                    <a href="#/">
                        <div></div>
                        <span>待付款</span>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div></div>
                        <span>待收货</span>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div></div>
                        <span>待评价</span>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div></div>
                        <span>退换/售后</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="user-form user-order">
            <div class="form-title">
                <span class="title-label">我的钱包</span>
                <a class="title-link" href="#/">查看全部资产</a>
            </div>
            <ul class="form-content">
                <li>
                    <a href="#/">
                        <div></div>
                        <span>待付款</span>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div></div>
                        <span>待收货</span>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div></div>
                        <span>待评价</span>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div></div>
                        <span>退换/售后</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="user-form user-order">
            <div class="form-title">
                <span class="title-label">我的关注</span>
            </div>
            <ul class="form-content">
                <li>
                    <a href="#/">
                        <div></div>
                        <span>待付款</span>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div></div>
                        <span>待收货</span>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div></div>
                        <span>待评价</span>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div></div>
                        <span>退换/售后</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="user-form user-order">
            <div class="form-title">
                <span class="title-label">我的活动</span>
            </div>
            <ul class="form-content">
                <li>
                    <a href="#/">
                        <div></div>
                        <span>待付款</span>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div></div>
                        <span>待收货</span>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div></div>
                        <span>待评价</span>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div></div>
                        <span>退换/售后</span>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div></div>
                        <span>待付款</span>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div></div>
                        <span>待收货</span>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div></div>
                        <span>待评价</span>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div></div>
                        <span>退换/售后</span>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div></div>
                        <span>退换/售后</span>
                    </a>
                </li>
            </ul>
        </div>
        <navbar></navbar>
    </section>
</template>

<script>
//    import Navbar from '@/components/Navbar'
    import Util from '@/util'
    export default {
        name: 'user',
//        components: { Navbar },
        data(){
            return {
                title: '个人中心'
            }
        },
        mounted(){
            this.$nextTick(function () {
                Util.setTitle(this.title);
            });
        }
    }
</script>

<style lang="less" scoped>
    @import "../../../static/less/common";
    .user{
        text-align: center;
        background-color: #E7E8EC;
        margin-bottom: 50px;
        .clearfix();
        &-info{
            width: 100%;
            height: 9.5rem;
            background-color: #E45050;
        }
        &-news{
            width: 100%;
            height: 40px;
            background-color: #F1F2F6;
        }
        &-form{
            background-color: #fff;
            height: 100%;
            border-bottom: 1px solid #E4E5E8;
            margin-top: 10px;
            .clearfix();
            .form-title{
                position: relative;
                height: 40px;
                line-height: 40px;
                margin-left: 11px;
                border-bottom: 1px solid #F0F0F0;
                text-align: left;
                .title-link{
                    position: absolute;
                    right: 10px;
                }
            }
            .form-content{
                .clearfix();
                li{
                    width: 25%;
                    height: 60px;
                    line-height: 60px;
                    float: left;
                }
            }
        }
    }
</style>

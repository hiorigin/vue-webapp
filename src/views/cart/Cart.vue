<template>
    <section class="cart">
        <div class="cart-edit">
            <div class="edit-content">
                <span>深圳市南山区</span>
                <span>编辑</span>
            </div>
        </div>
        <div class="cart-form">
            <div class="form-wrap">
                <div class="form-title">
                    <input type="radio" checked="checked">
                    <a href="#">JD 京东自营</a>
                </div>
                <ul class="form-list">
                    <li class="form-item">
                        <div class="item-title">商品以免运费，已选商品总重2.668kg</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="count-nav" v-if="goods.length != 0">
            <ul>
                <li></li>
                <li></li>
            </ul>
        </div>

        <!--快捷导航菜单-->
        <quick></quick>
    </section>
</template>

<script>
    import Util from '@/util'
    export default {
        name: 'Cart',
        data() {
            return {
                title: '购物车',
                goods: []
            }
        },
        mounted () {
            this.$nextTick(function(){
                Util.setTitle(this.title);
            });
        },
        methods: {
            // TODO 待完成相关功能
        }
    }
</script>

<style lang="less" scoped>
    .cart{
        height: 100%;
        margin-bottom: 50px;
    }
    .cart-edit{
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: #F1F2F6;
        border-bottom: 1px solid #DEDEE0;
        .edit-content{
            margin: 0 11px;
        }
    }
    .cart-form{
        width: 100%;
        .form-title{
            height: 40px;
            line-height: 40px;
            padding: 0 11px;
            border-bottom: 1px solid #E0E0E0;
        }
        .form-item{
            margin-left: 11px;
            .item-title{
                height: 40px;
                line-height: 40px;
                border-bottom: 1px solid #E3E3E3;
            }
        }
    }
    .count-nav{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: #f06;
    }
</style>

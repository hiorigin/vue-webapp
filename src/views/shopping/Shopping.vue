<template>
    <section class="shopping">
        <banner>
            <li slot="banner-item" v-for="pic in picData" class="banner-item">
                <img :src="pic" alt="img" />
            </li>
        </banner>
        <h1>Shopping page</h1>

        <navbar></navbar>
    </section>
</template>

<script>
//    import Navbar from '@/components/Navbar'
    import Util from '@/util'
    export default {
        name: 'shopping',
//        components: { Navbar },
        data(){
            return {
                title: '购物圈',
                picData: [
                    '/static/img/slider/test1.jpg',
                    '/static/img/slider/test2.jpg',
                    '/static/img/slider/test3.jpg',
                    '/static/img/slider/test4.jpg',
                    '/static/img/slider/test5.jpg'
                ]
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

</style>

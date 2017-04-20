<template>
    <section class="home">
        <search></search>
        <banner></banner>
        <subnav></subnav>
        <subbanner></subbanner>
        <recommend></recommend>
        <navbar></navbar>
    </section>
</template>

<script>
//    import Banner from '@/components/Banner'
//    import Navbar from '@/components/Navbar'
    import Subbanner from '@/components/Subbanner'
    import Subnav from '@/components/Subnav'
    import Search from '@/components/Search'
    import Recommend from '@/components/Recommend'
    import Util from '@/util'
    export default {
        name: 'home',
        components: { Subbanner, Subnav, Search, Recommend },
        data(){
            return{
                title: '京东购物'
            }
        },
        mounted() {
            this.$nextTick(function () {
                Util.setTitle(this.title);
            });
        },
        methods:{

        }
    }
</script>

<style lang="less" scoped>
    .home{
        margin-bottom: 55px;
        h1{
            font-size: 30px;
            color: #f06;
        }
    }
</style>

<template>
    <section>
        <nav class="quick-nav" :class="{ show:  isOverlay }">
            <!--<span @click="changeShow($event)">快速 导航</span>-->
            <span class="quick-item" @click="isOverlay = !isOverlay">快速 导航</span>
            <ul class="quick-nav-tab">

            </ul>
        </nav>
        <div class="overlay" :class="{ show:  isOverlay }" v-if="isOverlay != false"></div>
    </section>
</template>

<script>
    export default {
        name: 'Cart',
        data() {
            return {
                isOverlay: false
            }
        },
        methods: {
            changeShow(ev) {
                var evt = ev;
                console.log(evt);
                this.isOverlay = !this.isOverlay;
            }
        }
    }
</script>

<style lang="less" scoped>
    .quick-nav {
        display: block;
        position: fixed;
        right: -225px;
        bottom: 115px;
        width: 225px;
        height: 105px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background-color: #ccc;
        -webkit-transition: right 1s;
        transition: right 1s;
        z-index: 100001;

        .quick-item {
            display: block;
            position: absolute;
            right: 232px;
            top: 40px;
            font-size: 10px;
            color: #fff;
            width: 25px;
            line-height: 1;
            background-color: #ccc;
            -webkit-transition: right 1s;
            transition: right 1s;
        }

        /*.itemShow {*/
            /*right: 232px;*/
            /*-webkit-transition: right 1s;*/
            /*transition: right 1s;*/
        /*}*/

        /*&-tab {*/
            /*position: fixed;*/
            /*right: -225px;*/
            /*bottom: 80px;*/
            /*width: 225px;*/
            /*height: 105px;*/
            /*background-color: #fff;*/
            /*border-top-left-radius: 5px;*/
            /*border-bottom-left-radius: 5px;*/
             /*-webkit-transition: right 1s;*/
             /*transition: right 1s;*/
         /*}*/

    }

    @keyframes quick-move
    {
        from {right: -225px;}
        to {right: 0;}
    }

    @-webkit-keyframes quick-move
    {
        from {right: -225px;}
        to {right: 0;}
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
        -webkit-transition: right 1s;
        transition: right 1s;
        z-index: 100000;
    }

    .show {
        right: 0;
        -webkit-transition: right 1s;
        transition: right 1s;
    }
</style>

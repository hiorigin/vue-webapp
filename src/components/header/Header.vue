<template>
	<section>
		<!-- <header class="header">
			<div class="header-nav">

			</div>
		</header> -->   <!-- // header -->

		<div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(img, index) in imgs">
                    <a href="#"><img :src="img" alt=""></a>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>  <!-- // swiper -->
	</section>

</template>

<script>
import Swiper from 'swiper';
export default {
    name: 'header',
    data() {
        return {
            imgs: [
                '/static/img/silder/test1.jpg',
                '/static/img/silder/test2.jpg',
                '/static/img/silder/test3.jpg',
                '/static/img/silder/test4.jpg',
                '/static/img/silder/test5.jpg'
            ]
        }
    },
    mounted () {
        this.$nextTick(function() {
            this.swiperView();
        });
    },
    methods: {
        swiperView: function(){
            var swiper = new Swiper('.swiper-container', {
                autoplay: 5000,
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true
            });
        }
    }
}
</script>

<style lang="less" scoped>
@import '~swiper/dist/css/swiper.min.css';
@headerHeight: 46px;

.header {
    position: fixed;
    top: 0;
    width: 100%;
    height: @headerHeight;
    line-height: @headerHeight;
    background-color: #f06;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
    overflow: hidden;

    &-nav {
        margin: 0 10px;
        height: @headerHeight;
        z-index: 9999;
    }
}
.swiper-container {
    width: 100%;
    height: 100%;
}
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    img {
        width: 100%;
        height: 200px;
    }
}
</style>

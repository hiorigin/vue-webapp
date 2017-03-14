<template>
	<section>
        <div class="search-wrap">
            <div class="search-bar">
                <form class="search-bar-form">

                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'saerch',
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
    @searchWrapHeight: 46px;
    .search-wrap {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: #f06;
        z-index: 100;
    }
    .search-bar {
        display: webkit-box;
        display: flex;
        box-sizing: border-box;
        position: relative;
        padding: 8px 10px;
        background-color: #efeff4;

        &:before {
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            height: 1px;
            border-top: 1px solid #D7D6DC;
             -webkit-transform-origin: 0 0;
             transform-origin: 0 0;
             -webkit-transform: scaleY(0.5);
             transform: scaleY(0.5);
         }
         &:after {
              content: " ";
              position: absolute;
              left: 0;
              bottom: 0;
              right: 0;
              height: 1px;
              border-bottom: 1px solid #D7D6DC;
              color: #D7D6DC;
              -webkit-transform-origin: 0 100%;
              transform-origin: 0 100%;
              -webkit-transform: scaleY(0.5);
              transform: scaleY(0.5);
          }

          &-form {
               position: relative;
               -webkit-box-flex: 1;
               -webkit-flex: auto;
               flex: auto;
               background-color: #EFEFF4;
           }
    }
</style>

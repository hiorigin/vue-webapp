<template>
    <section id="search" class="search">
        <div class="search-menu">
            <span class="search-icon"></span>
        </div>
        <form action class="search-form">
            <input type="search" name="word" class="search-wrap" autocomplete="off" />
        </form>
    </section>
</template>

<script>
    export default {
        name: 'search',
        data(){
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../static/less/common";
    .search{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 100;
        background-color: transparent;
        .clearfix();

        .search-form:before{
            width: 30px;
            border-radius: 10px 0 0 10px;
            background-position-x: 5px;
            background-color: hsla(0,0%,100%,.6);
        }
    }
    .search-menu{
        position: absolute;
        top: 0;
        left: 0;
        height: 44px;
        min-height: 44px;
        padding-right: 11px;
        cursor: pointer;
        .search-icon{
            display: block;
            width: 40px;
            height: 40px;
            margin-left: -5px;
            margin-top: 3px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC0UExURQAAAAAAAP7+/ujo6AAAAAAAAAAAAAAAAAAAAAAAAAAAANXV1f///8nJyfb29vLy8u3t7f39/cLCwvf39/r6+vn5+QAAANLS0gAAAAAAAL+/v+7u7vb29u3t7f///+Tk5I2Njfv7+wAAAPDw8Lq6uuTk5Ojo6HJycuHh4fT09N3d3fn5+be3t9ra2vHx8ff399ra2urq6u3t7fHx8ZaWlmNjY76+vrm5uf////Ly8vj4+P///yXwNzsAAAA7dFJOUwAI8Y0VEA0DCgUcTfpRyIeK41TG1MUZOhgXK3iKj/x9HcQfqhaPaiM2pyWUQ16ptnBXRZk2KUBC8GXWVzoCEwAAArtJREFUWMPtl9eSmzAUQI2QhIRMM8WAd+O67m17kvv//5Ur8JbM+iGRdzN50HmBMcNBc6Vb3OlYLBaL5R/heV8lloh3+sY5LjBfdbtX2u150hEfcKSp3JPiG0BXSH1L4AxEGqu5VnN8Xzrn1Y40Vl93u9etmjP6AcbN1QJ9rA2I4OwDXJgGpBG2r3/2Nn7l4fvKlLHZaLPRZqPNRpuNNhttNlos/8+/pLNJcnnOYDJuNpiPM+k04I2caaG8G6/x99vD2rCIeOs7MR5jqXgtonfO5vtSYjnpkzHnI5Jh6fOM1hwByzOl+gOlhnCv1KBGZzISURRnsIpzOETRDxO3dCKgKa41Z7ScwkNFuRC8D9nofTcYG6ixokZQhFkveHpKU0LCNJ9jIeUD2NHKn0yScDLxS8odA7XDY/DDsChoAKEGIoFFmyvG7tPwJyRhmKZzk24gl3kCoV5tOoTisfdQaLV2M5Yn7o1mCjsDtSf7eYor1WtDdQ/cAmIulkLUIxanfkMPlJAmoWbb4wRu/McigDKAoNRqvXOKxa+7aKLuoHpFfFzsIQugQnWFan6rBqBonPUahqbqEZlqNZkGgDsZUK3mTJ3UQXCBOoKHEtwdHF9WHemDrfAj7oUBqWFFKbgp0YFuVv2mDptdnJhu42wzYtR1waVDCI6wfW4On1ZX+8RtmBqqHTzBdEuyCkewKiPHBSY6FqYchmX6GpDYJCDNLDYk5JkyttiDC2SH8cDylML00T9RmCW6rAcJ5AvG6oiAW24zuOd9ki3KPSSHNiBunI+XBuo1QDLHmXGOV4VBWaxgXic1TphP++xtDp79faZL51bpYVSIgb5qBryFsd/mYIMigicNh1G9nXh12km1aWT44AUhjOo1dkScUz3dGKVuiA1Nazz1Sqd9YtjN3107bx38s+Zgi8Visfw5vwBIanzcxqkuCAAAAABJRU5ErkJggg==) no-repeat;
            background-size: cover;
        }
    }
    .search-form{
        position: relative;
        height: 44px;
        margin-left: 35px;
        margin-right: 10px;
        padding-left: 30px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        overflow: hidden;
        &:before{
            content: "";
            display: block;
            position: absolute;
            top: 7px;
            left: 0;
            border-radius: 3px 0 0 3px;
            background: #dbdbdb url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURQAAAOQ5POQ5POQ5POQ5POQ5POQ5POQ5POQ5POQ5POQ5POQ5POQ5POQ5POQ5POQ5POQ5POQ5POQ5POQ5POQ5POQ5PCqa0jQAAAAVdFJOUwAFHspa9LnDPNKrNkaRDZ5y4oPZzh7xEWkAAADISURBVEjH7ZRBEoMgDEUDCAoqoMj9r1oiumhXEKfTRfN2YXgDxvABGIZhvoLNOQ8AY0b0Zs2+CJpc0auky0WP3bJxzhy66k50yhPWYgqnv1LkglRoLzQZPC4qogwTHj0TZTCl3KlyxOZT5bmUG1WWOClU2WPHfnJy4zenJ93envxnXcf4XZ7bJuzcJmmzLfB+CSivSiwHbovQ/Z6DUzU1rLhkF5xRbUly51U6064zw+6k9PApN6RnCWkVBn9Vl6xTV24zDPN/vAAH/Bw7U2RGMQAAAABJRU5ErkJggg==) no-repeat;
            background-size: 30px 30px;
            height: 30px;
            width: 30px;
        }

        .search-wrap{
            height: 30px;
            width: 100%;
            padding: 0 0 0 26px;
            display: block;
            background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURQAAAKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqBO3M5sAAAAadFJOUwAV1OdA+cSXBxq+yyfRmiqBdi/ZEkxNnWri++TEoQAAAONJREFUSMftlckSgyAQROMCsoi4G/v/PzRyiRuHIVRySNE3p+rZzsC0j0dSUtLfq+5UwVihujoYLTne4mUQKipgWGYphJyXAagEnR0322p/3N7ER7KvhrHHgjXQVO8GWp4rUqMhzgq4DbgGaFPjx373vjmF7WF8ZYOeALc+Y2fdEmDl766EIsAFpK8sURBgBu+RCrBvw1GfHTWwqKOKuiRR19Mthr3WLHUxfCu5UlfShYE+h8EKJskxpK8xxJBnQQHYTC4Ap8YFoMwD6Fv0ZkH0NfQD6Yui6efnf68sgk1KSvqBXt8FDq1T6rwBAAAAAElFTkSuQmCC) no-repeat;
            background-size: 30px 30px;
            border: none;
            margin-top: 7px;
            line-height: 18px;
            border-radius: 0 10px 10px 0;
            background-color: hsla(0,0%,100%,.6);
        }
    }
</style>

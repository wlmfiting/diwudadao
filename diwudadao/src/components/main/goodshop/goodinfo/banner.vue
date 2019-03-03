<template>
    <div class="banner">
            <div class="swiper-container" ref="GoodsContainer">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in email">
            <img :src="item.filepath" class="swiperimg">
            </div>
        </div>
        <div class="swiper-pagination swiper-p" ref="GoodsList"></div>
        </div>
    </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
export default {
    props:{
        email:Array
    },
    updated() {
        if (!this.swiper) {
            this.swiper = new Swiper(this.$refs.GoodsContainer, {
                autoplay: {
                disableOnInteraction: false
                },
                loop: true,
                pagination: {
                el: this.$refs.GoodsList,  
                }
            }); 
        }
 
    },
}
</script>
<style lang="" scoped>
    .banner{width: 100%;height: 7rem;position: relative;background: #fff;}
    .swiperimg{height: 7rem;margin: 0 auto;}
    .swiper-p{padding: .4rem;bottom: .2rem;background-image:-webkit-gradient(linear, 0 0, 0 100%, from(transparent), to(rgba(0, 0, 0, 0.5))) }
</style>
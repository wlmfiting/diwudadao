<template>
    <div class="banner">
        <div class="swiper-container" ref="homeContainer">
            <div class="swiper-wrapper">
                <router-link :to="item.slide_url" class="swiper-slide" v-for="(item) in bannerList">
                    <img :src="item.silde_original" alt="">
                </router-link> 
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex"
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
export default {
    
    computed: {
        ...Vuex.mapState({
            bannerList:state=>state.home.bannerSlider,
            
        })
    },
    mounted() {
        var swiper = new Swiper(this.$refs.homeContainer, {
            loop:true,
            observer:true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 2500,
                // disableOnInteraction: false,
            },
        });
    },
}
</script>

<style scoped>
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-container .swiper-pagination .swiper-pagination-bullet {
        width: 7px;
        height: 7px;
        border: 1px solid #fff;
        box-size: border-box;
        opacity: 1;
        background-color: rgba(0,0,0,0);
        }
        .swiper-container .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: #fff;
        }
</style>

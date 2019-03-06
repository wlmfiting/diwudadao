<template>
    <div class="banner">
        <div class="swiper-container" ref="homeContainer">
            <div class="swiper-wrapper">
                <a @click="handleChangePathTo(item.slide_url)" class="swiper-slide" v-for="(item) in bannerList" :key='item.id'>
                    <img :src="item.silde_original" alt="">
                </a> 
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex"
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import obj from "../../../../common/js/common/pathchange.js"
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
    methods: {
        handleChangePathTo(url){
            obj.handleClickTo(url,"",this)
        }
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
        opacity: 1;
        background-color: rgba(0,0,0,0);
        }
        .swiper-container .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: #fff;
        }
</style>

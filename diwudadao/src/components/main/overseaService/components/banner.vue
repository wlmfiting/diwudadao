<template>
  <div class="banner">
    <div class="swiper-container" ref="overseaContainer">
      <div class="swiper-wrapper">
        <!-- <router-link class="swiper-slide" v-for="(item) in bannerList" :key="item.id">
          <img :src="item.ad_code">
        </router-link> -->
        <div class="swiper-slide" v-for="(item,index) in bannerList">
          <img :src="item.ad_code">
        </div>
      </div>
      <div class="swiper-pagination" ref="overseaList"></div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
export default {
  computed: {
    ...Vuex.mapState({
      bannerList: state => state.overseaService.bannerList,
    })
  },
  updated() {
    if (!this.swiper) {
      this.swiper = new Swiper(this.$refs.overseaContainer, {
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: this.$refs.overseaList,  
        }
      }); 
    }
   
  },
  created() {}
};
</script>

<style scoped>
    
</style>

    

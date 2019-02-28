<template>
  <div class="banner">
   
       
        <div class="swiper-slide" v-for="(item,index) in bannerList">
          <img :src="item.ad_code">
        </div>
     
  </div>
</template>

<script>
import Vuex from "vuex";

export default {
  computed: {
    ...Vuex.mapState({
      bannerList: state => state.overseaService.bannerList,
      successcase: state => state.overseaService.successcase,
    })
  },
  updated() {
      
    console.log(1,this.bannerList)
    console.log(2,this.successcase)
  },
  created() {}
};
</script>

<style scoped>
    
</style>
<template>
  <div id="home">
    <Input-com/>
    <div class="wrapper homewrapper" ref="homewrapper">
      <div class="content">
        <Banner-com/>
        <FunNav-com/>
        <Recommend-com/>
        <Content-com/>
      </div>
    </div>
    
  </div>
</template>

<script>
import Vuex from "vuex"
import Input from "./components/input"
import Banner from "./components/banner"
import FunNav from "./components/funNav"
import Recommend from "./components/recommend"
import Content from "./components/content"

import BScroll from 'better-scroll'
export default {
  components:{
    "Input-com":Input,
    "Banner-com":Banner,
    "FunNav-com":FunNav,
    "Recommend-com":Recommend,
    "Content-com":Content,
  },
  created() {
    this.handleHomeDataButton();
    this.handleHomeDateSlider();
  },
  methods: {
    ...Vuex.mapActions({
      handleHomeDataButton:"home/handleHomeDataButton",
      handleHomeDateSlider:"home/handleHomeDateSlider"
    })
  },
  mounted() {
    let scroll = new BScroll(this.$refs.homewrapper);
  },
}
</script>

<style scoped>
  #home{
    height: 100%;
  }
  #home>.homewrapper{
    height: 100%;
  }
</style>

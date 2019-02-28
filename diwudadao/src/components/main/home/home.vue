<template>
  <div id="home" ref="homePage">
    <Input-com/>
    <div class="wrapper homewrapper" ref="homewrapper">
      <div class="content">
        <Banner-com/>
        <FunNav-com/>
        <Recommend-com/>
        <Content-com/>
      </div>
    </div>
    <div class="toTop">
      <span class="iconfont" @click="handleToTop()">&#xe61c;</span>
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
    }),
    handleToTop(){
      console.log(document)
      console.log(this.$root.$el.scrollTop)
      console.log(this.$root)
      this.$root.$el.scrollTop = 0;
    }
  },
  mounted() {
    let scroll = new BScroll(this.$refs.homewrapper,{
      click:true
    });
  },
}
</script>

<style scoped>
  #home{
    height: 100%;
    background: #f2f2f2;
  }
  #home>.homewrapper{
    height: 100%;
  }
  #home>.toTop{
    position: fixed;
    right: .4rem;
    bottom: 1.3rem;
    z-index: 100;
    background: #fff;
    border-radius: 1.5rem;
  }
  #home>.toTop>span{
    font-size: .8rem;
  }
</style>

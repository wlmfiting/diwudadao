<template>
  <div id="home" ref="homePage">
    <Input-com/>
    <div class="wrapper homewrapper" ref="homewrapper">
      <div class="content">
        <Banner-com/>
        <FunNav-com/>
        <Recommend-com/>
        <Content-com/>
        <Artical-com :articalList="articlelist" v-if="this.flag1"/>
        <FlashSales-com/>
        <Artical-com :articalList="articalothersads.ads_info"/>
      </div>
    </div>
    <div class="toTop">
      <span class="iconfont" @click="handleToTop()">&#xe61c;</span>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
// import Input from "./components/input";
// import Banner from "./components/banner";
// import FunNav from "./components/funNav";
// import Recommend from "./components/recommend";
// import Content from "./components/content";
// import Artical from "./components/articallist";
// import FlashSales from "./components/flashSales";

import BScroll from "better-scroll";
export default {
  data() {
    return {
      page: 1,
      flag1: false,
      flag2: false
    };
  },
  components: {
    "Input-com":resolve => {require(['./components/input.vue'],resolve)},
    "Input-com": resolve => {require(['./components/input.vue'],resolve)},
    "Banner-com": resolve => {require(['./components/banner'],resolve)},
    "FunNav-com": resolve => {require(['./components/funNav.vue'],resolve)},
    "Recommend-com": resolve => {require(['./components/recommend.vue'],resolve)},
    "Artical-com": resolve => {require(['./components/articallist.vue'],resolve)},
    "Content-com": resolve => {require(['./components/content.vue'],resolve)},
    
    "FlashSales-com": resolve => {require(['./components/flashSales.vue'],resolve)},
  },
  created() {
    this.handleHomeDataButton();
    this.handleHomeDateSlider();
    this.handleDateHomeArticalAds({ page: this.homePage });
  },
  computed: {
    ...Vuex.mapState({
      articlelist: state => state.home.article_list,
      articalothersads: state => state.home.artical_others_ads,
      homePage:state=>state.home.homePage,
    })
  },
  methods: {
    ...Vuex.mapActions({
      handleHomeDataButton: "home/handleHomeDataButton",
      handleHomeDateSlider: "home/handleHomeDateSlider",
      handleDateHomeArticalAds: "home/handleDateHomeArticalAds"
    }),
    handleToTop() {
      this.onScroll.scrollTo(0, 0, 500)
    }
  },
  watch:{
    articalothersads(newVal,oldVal){
      console.log(newVal,oldVal)
      this.onScroll.refresh();
      this.onScroll.finishPullUp();
    },
    articlelist(){
        if(this.articlelist){
          console.log(true)
        this.flag1=true
        }
        console.log(200)
    },
     articalothersads(){
        if(this.articalothersads){
        this.flag2=1
        }
        console.log(200)
    }
  },
  mounted() {
    let that = this;
    console.log(this.articlelist)
    console.log(this)
    console.log(this.articlelist)
    this.$nextTick(() => {
      this.onScroll = new BScroll(this.$refs.homewrapper, {
        click: true,
        tap:true,
        probeType: 2,
        //下拉刷新：可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
        //这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
        pullUpLoad: {
          threshold: true
        },
        useTransition: false // 防止iphone微信滑动卡顿
      });
      this.onScroll.on("pullingUp", function() {
        console.log(this)
        this.pullupMsg = '加载中。。。';
        setTimeout(()=>{
          that.handleDateHomeArticalAds({ page: that.homePage });
            that.handleDateHomeArticalAds().then((res)=>{
                //恢复文本值
                that.pullupMsg = '加载更多';
            })
        },3000)
      })
      this.handleToTop(); // 回到顶部
    });
    
  }
}
</script>

<style scoped>
#home {
  height: 100%;
  background: #f2f2f2;
}
#home > .homewrapper {
  height: 100%;
}
#home > .toTop {
  position: fixed;
  right: 0.4rem;
  bottom: 1.3rem;
  z-index: 100;
  background: #fff;
  border-radius: 1.5rem;
}
#home > .toTop > span {
  font-size: 0.8rem;
}
</style>

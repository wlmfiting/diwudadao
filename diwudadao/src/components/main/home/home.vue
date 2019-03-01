<template>
  <div id="home" ref="homePage">
    <Input-com/>
    <div class="wrapper homewrapper" ref="homewrapper">
      <div class="content">
        <Banner-com/>
        <FunNav-com/>
        <Recommend-com/>
        <Content-com/>
        <Artical-com :articalList="articlelist"/>
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
import Input from "./components/input";
import Banner from "./components/banner";
import FunNav from "./components/funNav";
import Recommend from "./components/recommend";
import Content from "./components/content";
import Artical from "./components/articallist";
import FlashSales from "./components/flashSales";

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
    "Input-com": Input,
    "Banner-com": Banner,
    "FunNav-com": FunNav,
    "Recommend-com": Recommend,
    "Content-com": Content,
    "Artical-com": Artical,
    "FlashSales-com": FlashSales
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
      console.log(document);
      console.log(this.$root.$el.scrollTop);
      console.log(this.$root);
      this.$root.$el.scrollTop = 0;
      console.log(this.articalothersads);
    }
  },
  watch:{
    articalothersads(newVal,oldVal){
      console.log(newVal,oldVal)
      this.onScroll.refresh();
      this.onScroll.finishPullUp();
    }
  },
  mounted() {
    let that = this;
    console.log(this)
    this.$nextTick(() => {
      this.onScroll = new BScroll(this.$refs.homewrapper, {
        click: true,
        tap:true,

        probeType: 2,
        //下拉刷新：可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
        //这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
        pullUpLoad: {
          threshold: 10
        },
        useTransition: false // 防止iphone微信滑动卡顿
      });
      this.onScroll.on("pullingUp", function() {
          alert('已到最底部');
        this.pullupMsg = '加载中。。。';
        setTimeout(()=>{
          console.log(this)
          that.handleDateHomeArticalAds({ page: that.homePage });
            // that.handleDateHomeArticalAds().then((res)=>{
            //     //恢复文本值
            //     that.pullupMsg = '加载更多';
            //     that.scroll.refresh();
            // })
        },2000)
      })
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

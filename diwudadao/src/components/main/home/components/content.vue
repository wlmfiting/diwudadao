<template>
  <div class="content">
    <div class="new_register" v-for="(item) in new_register">
      <a @click="handleClickTo(item.ad_link)">
        <img :src="item.ad_code" :alt="item.ad_name">
      </a>
    </div>
    <div class="vip_member">
      <div v-for="(item,index) in vip_member">
        <a v-if="index === 0" @click="handleClickTo(item.ad_link)">
          <img :src="item.ad_code" :alt="item.ad_name">
        </a>
        <a v-else class="smallImg" @click="handleClickTo(item.ad_link)">
          <img :src="item.ad_code" :alt="item.ad_name">
        </a>
      </div>
    </div>
    <div class="five_example">
      <a @click="handleClickTo(five_example.ads_info.ad_link) " v-if="five_example.ads_info">
        <img :src="five_example.ads_info.ad_code">
      </a>
    </div>
    <div class="buy_list" v-for="(item) in buy_list">
      <a @click="handleClickTo(item.ad_link)">
        <img :src="item.ad_code" :alt="item.ad_name">
      </a>
    </div>

    <div class="article_list">
      <div class="gg-lartical-list" v-for="(item,index) in article_list">
        <div class="altical-content">
          <a @click="handleClickTo(item.ads_info.ad_link)" class="skipTo">
            <img :src="item.ads_info.ad_code" :alt="item.ads_info.ad_code">
            <div class="content-text">
              <h3>{{item.ads_info.ad_name}}</h3>
              <p>{{item.ads_info.ad_title}}</p>
            </div>
            <div class="clearscroll" v-if="item.ads_info.product_info.length != 0">
              <div class="wrapper" ref="wrapper">
                <ul class="content">
                  <li v-for="(product) in item.ads_info.product_info" >
                      <a>
                          <div class="productImg">
                              <!-- product.product_thumb -->
                              <img :src="changeImgPath(product.product_thumb)" alt="">
                          </div>
                          <p class="produce-name">{{product.brand_name}}</p>
                          <p class="produce-price">{{product.ad_subtitle}}</p>
                      </a>
                  </li>
                </ul>
              </div>
            </div>
          </a>

        </div>
      </div>
    </div>

    <div class="flash_sales">
        <ul class="flash-list">
            <li class="flash-box" v-for="(item) in flash_sales">
                <a @click="handleClickTo(item.target_url)">
                    <div class="imgBox">
                        <img :src="item.sales_thumb" alt="">
                    </div>
                    <div class="flash-content">
                        <div class="conleft">
                            <p class="name">
                                <span class="title">{{item.sales_title}}</span>
                                <span class="price">{{item.discount_info}}</span>
                            </p>
                            <p class="details">{{item.sales_desc}}</p>
                        </div>
                        <div class="conright">
                            <img :src="item.sales_logo" alt="">
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import BScroll from 'better-scroll'
export default {
    data () {
        return {
            index:0
        }
    },
  created() {
    this.handleDateHomeOtherAds();
  },
  methods: {
    ...Vuex.mapActions({
      handleDateHomeOtherAds: "home/handleDateHomeOtherAds"
    }),
    handleClickTo(link, id) {
      //   http://m.5lux.com/promote/special/3098  http://www.5lux.com/flagship/goods/140
      let newlink = link.replace(/(http:\/\/m\.5lux\.com)/, "/api");
      if (id) {
        this.$router.push(newlink + id);
      } else {
        this.$router.push(newlink);
      }
    },
    changeImgPath(params){
        let newlink = params.replace(/(http:\/\/)/, "https://images.weserv.nl/?url=");  //通过缓存图片
        return newlink;
    }
  },
  computed: {
    ...Vuex.mapState({
      new_register: state => state.home.new_register,
      vip_member: state => state.home.vip_member,
      five_example: state => state.home.five_example,
      buy_list: state => state.home.buy_list,
      article_list: state => state.home.article_list,
      current_topic: state => state.home.current_topic,
      flash_sales: state => state.home.flash_sales,
      newly_added: state => state.home.newly_added
    })
  },
  mounted() {
  },
  updated() {
       for(let i = 0,len = this.$refs.wrapper.length;i<len;i++){
            let scroll = new BScroll(this.$refs.wrapper[i],{
                scrollX :true
            });
       }
  },
};
</script>

<style lang="" scoped>
.content {
  overflow: hidden;
}
.new_register {
  margin-bottom: 0.2rem;
}
.vip_member {
  background: #fff;
}
.vip_member > div {
  float: left;
}
.vip_member {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 0.05rem;
}
.vip_member > div > .smallImg {
  display: inline-block;
  margin: 0.2rem 0;
}
.five_example {
  padding-bottom: 0.3rem;
  background: #fff;
}
.buy_list {
  margin-bottom: 0.2rem;
}
.article_list > .gg-lartical-list > .altical-content > .skipTo > .content-text {
  text-align: left;
  padding: 0.36rem 0.4rem 0 0.4rem;
  background: #fff;
}
.article_list> .gg-lartical-list> .altical-content> .skipTo> .content-text> h3 {
  font-family: \\9ed1\4f53;
  font-weight: 700;
  display: block;
  font-size: 0.28rem;
  color: #333;
  line-height: 0.36rem;
  padding-bottom: 0.36rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.article_list> .gg-lartical-list> .altical-content> .skipTo> .content-text> p {
  font-family: \\9ed1\4f53;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 0.24rem;
  color: #999;
  padding-bottom: .4rem;
  line-height: 0.36rem;
  border-bottom: .01rem solid #999;
}
.clearscroll>.wrapper{
    overflow: hidden;
    padding: .4rem .2rem;
    background: #fff;
    overflow-x: scroll;
}
.clearscroll>.wrapper>.content{
    display: flex;
    width: max-content;
}
.clearscroll>.wrapper>.content>li{
    flex: 0 0 2.6rem;
    width: 2.6rem;
    padding: 0 .2rem;
}
.clearscroll>.wrapper>.content>li>a{
    display: block;
    color: #7e8c8d;
}
.clearscroll>.wrapper>.content>li>a>.productImg{
    width: 100%;
    height: 2.6rem
}
.clearscroll>.wrapper>.content>li>a>.productImg>img{
    height: 100%;
    width: 100%;
}
.clearscroll>.wrapper>.content>li>a>.produce-name{
    font-family: Aria;
    font-size: .26rem;
    padding: .2rem 0 .1rem;
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
}
.clearscroll>.wrapper>.content>li>a>.produce-price{
    font-family: Aria;
    font-size: .24rem;
    color: #999;
    text-align: center;
}
.flash_sales{
    
}
.flash_sales>.flash-list>.flash-box{
    margin-bottom: .2rem;
    background: #fff;
}
.flash_sales>.flash-list>.flash-box>a{
    color: #7e8c8d;
}
.flash_sales>.flash-list>.flash-box>a>.imgBox{
    width: 100%;
}
.flash_sales>.flash-list>.flash-box>a>.imgBox>img{
    width:100%;
}
.flash_sales>.flash-list>.flash-box>a>.flash-content{
    display: flex;
    padding: .26rem .2rem;
}
.flash_sales>.flash-list>.flash-box>a>.flash-content>.conleft{
    flex: 1;
    font-family: \\9ED1\4F53;
    font-size: .28rem;
    font-weight: 700;
}
.flash_sales>.flash-list>.flash-box>a>.flash-content>.conleft>.name{
    margin-bottom: .14rem;
    width: 70%;
}
.flash_sales>.flash-list>.flash-box>a>.flash-content>.conleft>.name>.title{
    margin-right: .24rem;
    color: #333;
}
.flash_sales>.flash-list>.flash-box>a>.flash-content>.conleft>.name>.price{
    color: #f33;
}
.flash_sales>.flash-list>.flash-box>a>.flash-content>.conleft>.details{
    color: #999;
    font-size: .26rem;
    font-weight: 400;
}
.flash_sales>.flash-list>.flash-box>a>.flash-content>.conright{
    width:1.2rem;
    height: .6rem;
    margin-top: .04rem;
}
.flash_sales>.flash-list>.flash-box>a>.flash-content>.conright>img{
    width: 100%;
    height: 100%;
    
}
</style>
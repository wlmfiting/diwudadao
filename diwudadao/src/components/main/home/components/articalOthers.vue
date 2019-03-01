<template>
  <div class="artical-others-ads">
    <div class="gg-artical-list" v-for="(item,index) in artical_others_ads.ads_info">
        <p>{{item}}</p>
      <div class="altical-content">
        <a @click="handleChangePathTo(item.ad_link)" class="skipTo">
          <img :src="item.ad_code" :alt="item.ad_code">
          <div class="content-text">
            <h3>{{item.ad_name}}</h3>
            <p>{{item.ad_title}}</p>
          </div>
          <!-- <div class="clearscroll" v-if="item.ads_info.product_info.length != 0">
            <div class="wrapper" ref="wrapper">
              <ul class="content">
                <li v-for="(product) in item.product_info">
                  <a>
                    <div class="productImg">
                      <img :src="handleChangePathImg(product.product_thumb)" alt>
                    </div>
                    <p class="produce-name">{{product.brand_name}}</p>
                    <p class="produce-price">{{product.ad_subtitle}}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div> -->
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import obj from "../../../../common/js/common/pathchange.js" 
export default {
  data() {
    return {
      page: 1
    };
  },
  created() {
    this.handleDateHomeArticalAds({ page: this.page });
    this.apge++;
  },
  methods: {
    ...Vuex.mapActions({
      handleDateHomeArticalAds: "home/handleDateHomeArticalAds"
    }),
    handleChangePathTo(link,id){
        obj.handleClickTo(link,id,this)
    },
    handleChangePathImg(params){
        obj.changeImgPath(params)
    }
  },
  computed: {
    ...Vuex.mapState({
      artical_others_ads: state => state.home.artical_others_ads
    })
  },
  updated() {
    console.log(this.artical_others_ads.ads_info);
  }
};
</script>

<style lang="" scoped>
    .artical-others-ads > .gg-artical-list > .altical-content > .skipTo > .content-text {
        text-align: left;
        padding: 0.36rem 0.4rem 0 0.4rem;
        background: #fff;
    }
    .artical-others-ads> .gg-artical-list> .altical-content> .skipTo> .content-text> h3 {
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
    .artical-others-ads> .gg-artical-list> .altical-content> .skipTo> .content-text> p {
        font-family: \\9ed1\4f53;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 0.24rem;
        color: #999;
        padding-bottom: 0.4rem;
        line-height: 0.36rem;
        border-bottom: 0.01rem solid #999;
    }
</style>
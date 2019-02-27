<template>
    <div class="content">
        <div class="new_register" v-for="(item) in new_register">
            <router-link :to="item.ad_link">
                <img :src="item.ad_code" :alt="item.ad_name">
            </router-link> 
        </div>
        <div class="vip_member">
            <div v-for="(item,index) in vip_member">
                <router-link :to="item.ad_link" v-if="index === 0">
                    <img :src="item.ad_code" :alt="item.ad_name">
                </router-link>
                <router-link :to="item.ad_link" v-else class="smallImg">
                    <img :src="item.ad_code" :alt="item.ad_name">
                </router-link>
            </div>
        </div>
        <div class="five_example">
            <router-link :to="five_example.ads_info.ad_link">
                <img :src="five_example.ads_info.ad_code" :alt="five_example.ads_info.ad_name">
            </router-link> 
        </div>
        <div class="buy_list" v-for="(item) in buy_list">
            <router-link :to="item.ad_link">
                <img :src="item.ad_code" :alt="item.ad_name">
            </router-link> 
        </div>

        <div class="article_list">
            <div class="gg-lartical-list" v-for="(item) in article_list">
                <div class="altical-content">
                    <router-link to="item.ads_info.ad_link">
                        <img :src="item.ads_info.ad_code" :alt="item.ads_info.ad_code">
                        <div class="content-text">
                            <span>{{item.ads_info.ad_title}}</span>
                        </div>
                    </router-link>
                    <div class="swiper-container product_info" ref="homeProductSwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(goods) in item.ads_info.product_info">
                                <router-link :to="'https://apim.restful.5lux.com.cn/good/goodsdetail_recommend'+goods.product_id ">
                                    <img :src="goods.product_thumb" :alt="goods.sku_title">
                                    <span>{{goods.ad_title}}</span>
                                    <i>{{goods.ad_subtitle}}</i>
                                </router-link>
                            </div>
                            
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                
            </div>
        </div> 
    </div>
</template>

<script>
import Vuex from "vuex"
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
export default {
    // data () {
    //     return {
    //         content:[],
    //         new_register:[],
    //         vip_member:[],
    //         five_example:1,
    //         buy_list:[],
    //         article_list:[]
    //     }
    // },
    created() {
        this.handleDateHomeOtherAds();
    },
    methods: {
      ...Vuex.mapActions({
          handleDateHomeOtherAds:"home/handleDateHomeOtherAds"
      })  
    },
    computed: {
        ...Vuex.mapState({
            content:state=>state.home.content,
            new_register:state=>state.home.new_register,
            vip_member:state=>state.home.vip_member,
            five_example:state=>state.home.five_example,
            buy_list:state=>state.home.buy_list,
            article_list:state=>state.home.article_list
        })
    },
    mounted() {
        //  var swiper = new Swiper(this.$refs.homeProductSwiper, {
        //     slidesPerView: 'auto',
        //     spaceBetween: 30,
        //     pagination: {
        //         el: '.swiper-pagination',
        //         clickable: true,
        //     },
        // });
        // console.log(this.homeProductSwiper)
    },
}
</script>

<style lang="" scoped>
    .content{
        overflow: hidden;
    }
    .new_register{
        margin-bottom: .2rem;
    }
    .vip_member{
        background: #fff;
    }
    .vip_member>div{
        float: left;
        
    }
    .vip_member{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 0 .05rem;
    }
    .vip_member>div>.smallImg{
        display: inline-block;
        margin: .2rem 0;
    }
    .five_example{
        padding-bottom: .3rem;
        background: #fff;
    }
    .buy_list{
        margin-bottom: .2rem;
        
    }
</style>
<template>
    <div v-if="flag">
        <div class="country" >
            <img :src="countryInfo.country_info.banner_m">
            <div class="countryinfo">
                <div class="countryinfo1"><img :src="countryInfo.country_info.banner_m"></div>
                <div class="countryinfo2">
                    <p>{{countryInfo.country_info.name}}</p>
                    <p>{{countryInfo.country_info.name_en}}</p>
                    <p><span class="iconfont">&#xe6b0;</span><span class="iconfont">&#xe6b0;</span><span class="iconfont">&#xe6b0;</span><span class="iconfont">&#xe6b0;</span><span class="iconfont">&#xe6b0;</span>{{countryInfo.country_info.score}}</p>
                    <p><span class="iconfont">&#xe611;</span>{{countryInfo.country_info.liked}}</p>
                </div>
                <div class="countryinfo3">
                    <img :src="countryInfo.country_info.national_flag" >
                </div>
            </div>
       </div>
        <p class="info">{{countryInfo.country_info.description}}</p>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    data() {
        return {
            flag:false
        }
    },
    computed: {
        ...Vuex.mapState({
            countryInfo:state=>state.overseaService.countryInfo
        })
    },
    // props:{
    //     countryInfo:Object
    // },
    watch: {
        countryInfo(){
            this.flag = 1
        }
    },
}
</script>

<style lang="" scoped>
    .country{width: 100%;height: 3.8rem;background: #000;position: relative;}
    .country>img{width: 100%;height: 100%;opacity: .4;filter: blur(6px);}
    .country>.countryinfo{display: flex;position: absolute;width: 85%;right: 0;bottom: .5rem;color: #fff}
    .countryinfo1>img{width: 2.32rem;height: 1.74rem;margin-top: .2rem;margin-right: .2rem;}
    .countryinfo2{flex: 1;}
    .countryinfo3>img{width: 1rem;}
    .countryinfo2>p:nth-of-type(1){font-size: .4rem;}
    .countryinfo2>p:nth-of-type(2){font-size: .3rem;}
    .countryinfo2>p:nth-of-type(3){font-size: .3rem;padding: .1rem 0;color: cyan;}
    .countryinfo2>p:nth-of-type(3)>span{font-size: .3rem;}
    .countryinfo2>p:nth-of-type(4)>span{font-size: .3rem;padding:0 .2rem }
    .countryinfo2>p:nth-of-type(4){padding:.18rem;border: 1px solid #fff;width: 1.8rem}
    .info{padding: .3rem .5rem;color:gray;font-size:.3rem;background: #fff;}
</style>
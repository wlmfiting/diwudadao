<template>
  <div class="goods">
    <Banner-g :email='goodsbanner' />
    <div class="info">   
        <div  class="price">
            <div>￥<span>{{goodsprice.rank_price}}</span></div>
            <div>￥4730</div>
            <div>{{goodsprice.rank_name}} ></div>
        </div>
        <div class="shui">{{goodsshui}}</div>  
    </div>
    <div>
        
    </div>
  </div>
</template>
<script>
import Vuex from 'vuex'
import Banner from './goodinfo/banner'
export default {
    data () {
        return {
            flag:0
        }
    },
    components:{
       'Banner-g':Banner
    },
    props:{
        id:String
    },
    created() {
        this.handleGoodInfo(this.id)
    },
    methods: {
        ...Vuex.mapActions({
            handleGoodInfo:'goods/handleGoodInfo'
        })
    },
    computed: {
        ...Vuex.mapState({
            goodsbanner:state=>state.goods.goodsbanner,
            goodsprice:state=>state.goods.goodsprice,
            goodsshui:state=>state.goods.goodsshui
        })
    },
    mounted() {
       // console.log(200,this.goodsinfo)
    },
    watch: {
        goodsbanner(){
            if(this.goodsbanner){
                this.flag=1
            }
        }
    }
    
}
</script>
<style lang="" scoped>
    .goods{background: #f2f2f2;}
    .info{padding: 0 .7rem;background: #fff;margin-bottom: .2rem;}
    .info>.price{display: flex;}
    .info>.price>div:nth-of-type(1){color: #9b885f;}
    .info>.price>div:nth-of-type(1)>span{color: #9b885f;font-size: .45rem}
    .info>.price>div:nth-of-type(2){color: #333;text-decoration: line-through;padding:.15rem .2rem 0 .2rem; }
     .info>.price>div:nth-of-type(3){color: #333;border: 1px solid #333;padding: .03rem .2rem;font-size: .24rem/1 '微软雅黑';height: .34rem;margin-top: .1rem;}
    .shui{padding:.2rem 0;font-size:.3rem; }
</style>
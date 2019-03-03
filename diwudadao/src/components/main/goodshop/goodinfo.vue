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
    <div class="box">
        <div class="installment" @click="handetogo1()">
            <span>分期支付</span>
            <p>{{goodsment}}</p>
            <i class="iconfont">&#xe763; </i>
        </div>
        <div class="installment"  @click="handetogo2()">
            <span>服务说明</span>
            <p>温馨提示 ：本商品有质量问题支持7天退换货</p>
            <i class="iconfont">&#xe763;</i>
        </div>
    </div>
     <div class="box">
        <div class="installment ment" @click="handetogo3()">  
            <p>产品参数</p>
            <i class="iconfont">&#xe60b;</i>
        </div>
        <div class="installment ment" @click="handetogo4()">      
            <p>选择:颜色尺码</p>
            <i class="iconfont">&#xe60b;</i>
        </div>
    </div>
    <div class="pay">
        <div class="pay1"><span class="iconfont">&#xe61d;</span>客服</div>
        <div class="pay1"><span class="iconfont">&#xe613;</span>购物袋</div>
        <div class="pay2 pay3">加入购物袋</div>
        <div class="pay2">立即购买</div>
    </div>
        <mt-popup v-model="flag1" position="bottom" class=".installmentshow1">
                <div class=".installmentshow">1</div>
                <p>{{goodstogo1}}</p>
        </mt-popup>
        <mt-popup v-model="flag2" position="bottom" class=".installmentshow1">
                <div class=".installmentshow">2</div>
                <p>{{goodstogo2}}</p>
        </mt-popup>
        <mt-popup v-model="flag3" position="bottom" class=".installmentshow1">
                <div class=".installmentshow">3</div>
                <p>{{goodstogo3}}</p>
        </mt-popup>
        <mt-popup v-model="flag4" position="bottom" class=".installmentshow1">
                <div class=".installmentshow">4</div>
                <p>{{goodstogo4}}</p>
        </mt-popup>
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
            flag:0,
            flag1:false,
             flag2:false,
              flag3:false,
               flag4:false,
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
        }),
        handetogo1(){
            this.flag1=!this.flag1
        },
        handetogo2(){
             this.flag2=!this.flag2
        },
        handetogo3(){
             this.flag3=!this.flag3
        },
        handetogo4(){
             this.flag4=!this.flag4
        }
    },
    computed: {
        ...Vuex.mapState({
            goodsbanner:state=>state.goods.goodsbanner,
            goodsprice:state=>state.goods.goodsprice,
            goodsshui:state=>state.goods.goodsshui,
            goodsment:state=>state.goods.goodsment,
            goodstogo1:state=>state.goods.goodstogo1,
            goodstogo2:state=>state.goods.goodstogo2,
            goodstogo3:state=>state.goods.goodstogo3,
            goodstogo4:state=>state.goods.goodstogo4,
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
    .info{padding: 0 .3rem;background: #fff;margin-bottom: .2rem;}
    .info>.price{display: flex;}
    .info>.price>div:nth-of-type(1){color: #9b885f;}
    .info>.price>div:nth-of-type(1)>span{color: #9b885f;font-size: .45rem}
    .info>.price>div:nth-of-type(2){color: #333;text-decoration: line-through;padding:.15rem .2rem 0 .2rem; }
     .info>.price>div:nth-of-type(3){color: #333;border: 1px solid #333;padding: .03rem .2rem;font-size: .24rem/1 '微软雅黑';height: .34rem;margin-top: .1rem;}
    .shui{padding:.2rem 0;font-size:.3rem; }
    .installment{padding: .2rem .2rem;background: #fff;display: flex;align-items: center;border-bottom:.1px solid #f2f2f2; }
    .installment>span{padding: .04rem .1rem;display: block;background:burlywood;color: #fff;margin-right:.3rem;}
    .installment>p{flex: 1;}
    .installment>i{font-size: .3rem;padding-right:.2rem; }
    .box{margin-bottom: .23rem;}
    .ment{font-size: .3rem;}
    .pay{display: flex;justify-content: center;align-items: center;width: 100%;height: .83rem;background: #fff;}
    .pay>.pay1{padding: .1rem;display: flex;flex-direction: column;width: 15%;text-align: center;}
    .pay>.pay1>span{display: block;justify-content: center;align-items: center;align-content: center;text-align: center;font-size: .33rem;}
    .pay>.pay2{flex: 1;text-align: center;background: darkgoldenrod;height: 100%;line-height: .83rem;color: #fff;}
    .pay>.pay3{background: darkkhaki;}

    .installmentshow{width: 7.5rem!important;height: 3rem!important;background: #fff;display: block;}
     .installmentshow1{width: 7.5rem!important;height: 3rem!important;background: #fff;display: block;}
</style>
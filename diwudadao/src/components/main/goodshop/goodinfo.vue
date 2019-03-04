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
            <p>{{pay||goodsment}}</p>
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
            <p> {{colorsize}} </p>
            <i class="iconfont">&#xe60b;</i>
        </div>
    </div>
    <div class="pay">
        <div class="pay1"><span class="iconfont">&#xe61d;</span>客服</div>
        <div class="pay1"><span class="iconfont">&#xe613;</span>购物袋</div>
        <div class="pay2 pay3">加入购物袋</div>
        <div class="pay2">立即购买</div>
    </div>
        <mt-popup v-model="flag1" position="bottom" class="installmentshow">
                <div class="ment">
                    <h3>分期说明</h3>
                    <div v-for="item in goodstogo1" class="ment1" @click='handelchange(item.installment_desc)'><p>{{item.installment_desc}}</p><p>{{item.service_charge_desc}}</p></div>
                    <div class="foot" @click="handetogo1()">确定</div>
                </div>      
        </mt-popup>
        <mt-popup v-model="flag2" position="bottom" class="installmentshow">
               <div class="ment">
                    <h3>服务说明</h3>
                        <div class="wrapper  goodsWrapper" ref="goodsWrapper">
                            <div class="content">
                                <div v-for="item in goodAll" class="ment1"><p>{{item.name}}</p><p class="mmm">{{item.desc}}</p></div>
                            </div>
                        </div>
                    <div class="foot" @click="handetogo2()">确定</div>
                </div> 
                <p>{{goodstogo2}}</p>
        </mt-popup>
         <mt-popup v-model="flag3" position="bottom" class="installmentshow">
               <div class="ment">
                    <h3>产品参数</h3>
                        <div class="wrapper  goodsWrapper" ref="canshuWrapper">
                            <div class="content">
                                <div v-for="item in goodsparaarr" class="ment1"><p></p><p >{{item}}</p></div>
                            </div>
                        </div>
                    <div class="foot" @click="handetogo3()">确定</div>
                </div> 
                <p>{{goodstogo2}}</p>
        </mt-popup>
        <mt-popup v-model="flag4" position="bottom" class="installmentshow installmentshow1">
                <div class="ment ment1">
                    <div class="articleInfo">
                            <div class="articleimg">
                            <div ><img :src="goodsImg"></div>
                            </div>
                        <div class="articlefont">
                            <p>{{goodsshui}}</p>
                            <p>￥{{goodsprice.rank_price}} X <span>{{num}}</span></p>
                            <p>颜色：<span>{{color}}</span>  大小：<span>{{size}}</span></p>
                        </div>
                    </div>
                    <div class="model">
                       <div class="model1">
                           <h3>{{goodsto0.attr_name}}</h3>
                           <ul class="modelul">
                               <li v-for="(li,index) in goodsto0.attr_val" :class="index==colorIndex?'modelli':''"  @click="handelgetcolorIndex(index,li.attr_value)">{{li.attr_value}}</li>
                           </ul>  
                       </div>
                        <div class="model1">
                           <h3>{{goodsto1.attr_name}}</h3>
                           <ul class="modelul">
                               <li v-for="(li,index) in goodsto1.attr_val" :class="index==sizeIndex?'modelli':''"  @click="handelgetsizeIndex(index,li.attr_value)">{{li.attr_value}}</li>
                           </ul>  
                       </div>
                       <h3>数量</h3>
                       <div class="readu"><p @click='handelnumread()'>-</p><input type="text" v-model="num"><p  @click='handelnumadd()'>+</p></div>
                    </div>
               
                <div class="foot" @click="handetogo4()">确定</div>
                </div>
        </mt-popup>
    <div>
        
    </div>
  </div>
</template>
<script>
import Vuex from 'vuex'
import Banner from './goodinfo/banner'
import Bscroll from "better-scroll";
export default {
    data () {
        return {
            flag:0,
            flag1:false,
            flag2:false,
            flag3:false,
            flag4:false,
            num:'1',
            color:'',
            size:'',
            sizeIndex:0,
            colorIndex:0,
            pay:'',
            colorsize:'选择颜色/尺码'
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
        handetogo1(n){
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
             if(this.color&&this.size&&this.num){
                 this.colorsize="选择:颜色:"+this.color+"/大小:"+this.size+"/数量:"+this.num
             }
        },
        handelgetsizeIndex(index,size){
            this.sizeIndex=index
            this.size=size
        },
        handelgetcolorIndex(index,color){
            this.colorIndex=index
            this.color=color
        },
        handelnumread(){
            if(this.num>1){
                 this.num--
            }else{
                this.num=1
            }
           
        },
        handelnumadd(){
            this.num++
        },
        handelchange(xx){
            this.pay=xx
             this.flag1=!this.flag1
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
            goodAll:state=>state.goods.goodAll,
            goodsparaarr:state=>state.goods.goodsparaarr,
            goodsImg:state=>state.goods.goodsImg,
            goodsto0:state=>state.goods.goodsto0,
            goodsto1:state=>state.goods.goodsto1,
        })
    },
    mounted() {   
       
            this.scroll = new Bscroll(this.$refs.goodsWrapper, {
                scrollY:true,
                click: true,
                tap: true
            });
      
            this.scroll = new Bscroll(this.$refs.canshuWrapper, {
                scrollY:true,
                click: true,
                tap: true
            });
    
    },
    updated () {
        //console.log(2,this.goodAll)
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
    .goods{background: #f2f2f2;font-family: PingFang SC,STHeiTisc-Light,Helvetice-Light,arial,sans-serif;}
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

    
     .installmentshow{width: 100%;height: 6rem;background: #fff;display: block;}
     .installmentshow>.ment{width: 100%;background: #fff;height: 100%;position: relative;}
     .installmentshow>.ment>h3{width: 100%;text-align: center;padding: .3rem;border-bottom:2px solid #f2f2f2;font-weight: 400;}
     .installmentshow>.ment .ment1{width: 100%;margin: 0 .4rem;padding:.2rem 0;border-bottom:2px solid #f2f2f2;}
     .installmentshow>.ment .ment1>P:nth-of-type(2){color: #f2f2f2;font-size: .24rem;color: #999;}
     .installmentshow>.ment .foot{width: 100%;height: 1rem;line-height: 1rem;font-size: .35rem;color: #fff;text-align: center;background: chocolate;position: fixed;bottom: 0;}
    .goodsWrapper{height: 4rem;overflow: hidden;}

    .installmentshow1{height: 9.6rem;}
    .articleInfo{display: flex;padding:.24rem .28rem;}
    .articleimg{position: relative;width: 2.2rem;}
    .articleimg>div{position: absolute;width: 2rem;height: 2rem;top: -.8rem;border: 1px solid #999;background: #fff;}
    .articleimg img{height: 100%;margin: 0 auto;text-align: center;}
    .articlefont{font-size: .26rem}
    .articlefont>p{padding: .02rem 0;}
    .articlefont>p:nth-of-type(2){font-size: .26rem;color: #9b885f;}
    .articlefont>p:nth-of-type(3){color: #999;}

    .installmentshow>.ment1 .model{padding: .2rem;background: #fafafa;overflow: hidden;}
    .model1{margin: .3rem 0;}
    .model .modelul{display: flex;padding: .2rem;border-bottom: 1px solid #ccc;}
    .model .modelul>li{padding: .1rem .3rem;text-align: center;font:.24rem/1.2 '微软雅黑';border: 1px solid #333;background: #fff;border-radius: .1rem;margin: 0 .3rem;color: #333;}
    .model .modelul>.modelli{color: #9b885f;border: 2px solid #9b885f;}
    .mmm{width: 6rem;}
    .readu{display: flex;}
    .readu>p{border: 1px solid #333;padding: .05rem .15rem}
    .readu>input{width: 1rem;margin: 0 .2rem;text-align: center;font-size: .3rem;}
</style>
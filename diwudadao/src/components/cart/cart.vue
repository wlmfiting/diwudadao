<template>
  <div id="cart">
    <div class="header">
      <mt-header title="购物车">
        <router-link to="/" slot="left">
          <mt-button icon="back" >
              <img src="../../assets/img/registerlogin/return.png" alt="">
          </mt-button>
        </router-link>
        <mt-button icon="text" slot="right">编辑</mt-button>
      </mt-header>
    </div>
    <div class="content">
      <div class="shop-list">
        <div class="shop">
          <div class="left-shop">YOOX集合店&nbsp;></div>
          <div class="handle" @click="handleOperate()">操作</div>
        </div>
        <div class="goods-list">
          <div class="checkedInput">
            <input type="checkbox"/>
          </div>
          <div class="goodImg">
            <img src="http://img550.5lux.com.cn/2018/03/16/cd/152116933626_800x800.jpg" alt="">
          </div>
          <div class="good-message">
            <p class="name">Pinko</p>
            <p class="detail">套衫突然大幅分的高分v从二手房的v的身份出现</p>
            <p class="type">黑色-S INT</p>
            <div class="price-num">
              <p class="price">￥1899</p>
              <div class="num-box">
                <span @click="handleReduce()">-</span>
                <span class="num">1</span>
                <span @click="handleAdd()">+</span>
              </div>
            </div>
          </div>
        </div>
        <div class="total">
          <span>本店总计（不含税）：</span>
          <span class="total-price">￥5123</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="checkedInput">
        <input type="checkbox"/>全选
      </div>
      <div class="total-goods">
        <p class="totle-price">合计<span>￥5123</span></p>
        <p class="num-goods">共计<span>3</span>件商品</p>
      </div>
      <div class="toAccountButton">去结算</div>
    </div>
  </div>
</template>

<script>
// import { Checklist } from "mint-ui";
export default {
    data () {
        return {
            count:1,
            value:[1],
            num:-1
        }
    },
    // created() {
    //   this.getCookieGoods();
    // },
    methods: {
      getCookieGoods(){

      },
      handleReduce(){

      }
    }
};
</script>

<style lang="" scoped>
    #cart{
      font-family: PingFang SC,STHeiTisc-Light,Helvetice-Light,arial,sans-serif;
      background: #f2f2f2;
    }
   .header{
        height: 1rem;
        border-bottom: .01rem solid #333
    }
    .header>.mint-header{
      height: 100%;
      font-size: .3rem;
      color: #333;
      padding: 0 .2rem;
    }
    .header>mt-header>mt-button{
      padding-right: .1rem;
    }
    #cart .mint-header{
      background: #fff;
    }
    #cart .mintui{
      font-size: .3rem !important
    }
    #cart .mint-header-title{
      font-family: \\9ED1\4F53;
    }
    .content>.shop-list{
      margin-top: .2rem;
      background: #fff;
    }
    .content>.shop-list>.shop{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: .84rem;
      background: #fff;
      border-bottom: .01rem solid #999;
    }
    .content>.shop-list>.shop>.left-shop{
      margin-left: .3rem;
    }
    .content>.shop-list>.shop>.handle{
      width: 1.3rem;
      height: .56rem;
      font-size: .24rem;
      color: #666;
      text-align: center;
      line-height: .56rem;
    }
    .shop-list>.total{
      text-align: right;
      height: .88rem;
      line-height: .88rem;
      padding-right: .3rem;
      border-bottom: .01rem solid #999;
      font-size: .26rem;
      color: #333;
    }
    .goods-list{
      display: flex;
      padding: .2rem 0;
      border-bottom: .01rem solid #999;
    }
    .goods-list>.checkedInput{
      display: flex;
      align-items: center;
      margin: 0 .16rem 0 .3rem;
    }
    .goods-list>.checkedInput>input{
      width: .44rem;
      height: .44rem;
      background: #9b885f;
      color: #fff;
    }
    .goods-list>.goodImg{
      width: 1.8rem;
      height: 1.8rem;
    }
    .goods-list>.goodImg>img{
      width: 100%;
      height: 100%;
    }
    .goods-list>.good-message{
      margin: 0 .2rem 0 .3rem;
      width: 4.5rem;
    }
    .name,.detail,.type{
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: \\65B9\6B63\4E2D\7B49\7EBF\7B80\4F53;
      font-size: .24rem;
    }
    .goods-list>.good-message>.name{
      color: #333;
      padding-bottom: .13rem;

    }
    .goods-list>.good-message>.detail{
      color: #333;
      padding-bottom: .13rem;
      display: block;
    }
    .goods-list>.good-message>.type{
      color: #999;
      margin-bottom: .42rem;
    }
    .goods-list>.good-message>.price-num{
      display: flex;
      justify-content: space-between;
    }
    .goods-list>.good-message>.price-num>.price{
      font-family: Arial-Regular;
      font-size: .26rem;
      color: #9b885f;
    }
    .goods-list>.good-message>.price-num>.num-box{
      border: .01rem solid #999;
    }
    .goods-list>.good-message>.price-num>.num-box>span{
      display: inline-block;
       text-align: center;
      vertical-align: middle;
      padding: .1rem .2rem;
      font-size: .3rem;
    }
    .goods-list>.good-message>.price-num>.num-box>.num{
       width: .48rem;
      border-left: .01rem solid #999;
      border-right: .01rem solid #999;
      padding: 0 .6rem;
      height: 100%;
      line-height: .48rem;
      text-align: center;
    }
    .footer{
      background: #fff;
      width: 100%;
      height: 1.2rem;
      border-top: .01rem solid #999;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1000;
      display: flex
    }
    .footer>.checkedInput{
      line-height: 1.2rem;
    }
</style>
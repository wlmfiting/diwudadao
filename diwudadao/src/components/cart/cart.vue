<template>
  <div id="cart">
    <div class="header">
      <a href="##" @click="handleBack()">
        <img class="left" src="../../assets/img/registerlogin/return.png">
      </a>
      <div class="title">购物车（{{SumCount}}）</div>
      <div class="right">编辑</div>
    </div>

    <div class="wrapper content" ref="wrapperCart" v-if="SumCount">
      <div class="shop-list content">
        <div class="shop" v-for="(item,index) in list">
          <div v-for="prop of item" class="prop-list">
            <div class="shoptitle">
              <div class="left-shop">{{prop[0].shop}}&nbsp;></div>
              <div class="handle" @click="handleOperate()">操作</div>
            </div>

            <div class="goods-list" v-for="(goodslist) in prop">
              <div class="goods-content">
                <div class="checkedlist">
                  <mt-checklist v-model="value" :options="['index']"></mt-checklist>
                </div>
                <div class="goodImg">
                  <img :src="goodslist.img">
                </div>
                <div class="good-message">
                  <p class="name">{{goodslist.name}}</p>
                  <p class="detail">{{goodslist.name}}</p>
                  <p class="type">{{goodslist.size}}</p>
                  <div class="price-num">
                    <p class="price">￥{{goodslist.price}}</p>
                    <div class="num-box">
                      <span @click="handleReduce(goodslist)">-</span>
                      <input class="num" v-model="goodslist.num">
                      <span @click="handleAdd(goodslist)">+</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="total">
                <span>本店总计（不含税）：</span>
                <span class="total-price">￥{{goodslist.price*goodslist.num}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!SumCount " class="empty">
      购物车是空的，请登录购买
    </div>
    <div class="footer">
      <div class="checkedInput">
        <mt-checklist v-model="value" :options="['全选']"></mt-checklist>
      </div>
      <div class="total-goods">
        <p class="totle-price">
          合计
          <span>￥{{SumPrice}}</span>
        </p>
        <p class="num-goods">
          共计
          <span>{{SumCount}}</span>件商品
        </p>
      </div>
      <div class="toAccountButton">去结算({{SumCount}})</div>
    </div>
  </div>
</template>

<script>
import { Checklist } from "mint-ui";
import Cookie from "js-cookie";
import BScroll from "better-scroll";
import "./cart.scss";
export default {
  data() {
    return {
      count: 1,
      value: [1],
      num: 1,
      list: [],
      sum: 0, //商品总数
      numPrice: 0, //总价格
      options: []
    };
  },
  computed: {
    SumCount: function() {
      var text = Cookie.get("cart");
      if (text) {
        var cookie = JSON.parse(text);
        this.list = cookie;
        this.sum = 0;
        this.list.map((item, index) => {
          var name = Object.getOwnPropertyNames(item)[0];
          var obj = item[name];
          obj.map((goods, index) => {
            this.sum = this.sum + parseInt(goods.num);
            this.numPrice = this.numPrice + parseInt(goods.num * goods.price);
          });
        });
        return this.sum;
      }else{
        return 0;
      }
    },
    SumPrice: function() {
      return this.numPrice;
    }
  },
  mounted() {
    if(this.SumCount){
      let scroll = new BScroll(this.$refs.wrapperCart, {
        click: true
      });
    }
  },
  methods: {
    handleReduce(obj) {
      if (obj.num > 1) {
        obj.num--;
      } else {
        obj.num == 1;
      }
      Cookie.set("cart", this.list);
    },
    handleAdd(obj) {
      if (obj.num < 6) {
        obj.num++;
      } else {
        obj.num == 6;
      }
      Cookie.set("cart", this.list);
    },
    handleOperate() {},
    handleBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="" scoped>
#cart {
  font-family: PingFang SC, STHeiTisc-Light, Helvetice-Light, arial, sans-serif;
  background: #f2f2f2;
  height: 100%;
}
.empty{
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  font-size: .4rem;
}
.header {
  height: 1rem;
  border-bottom: 0.01rem solid #333;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.3rem;
  color: #333;
  padding: 0 0.2rem;
}
#cart .mint-header {
  background: #fff;
}
#cart .mintui {
  font-size: 0.3rem !important;
}
#cart .mint-header-title {
  font-family: \\9ed1\4f53;
}
.wrapper {
  height: 83%;
}
.wrapper > .shop-list {
  margin-top: 0.2rem;
}
.wrapper > .shop-list > .shop {
  background: #fff;
  margin-top: 0.2rem;
}
.wrapper > .shop-list > .shop > .prop-list > .shoptitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.84rem;
  background: #fff;
  border-bottom: 0.01rem solid #999;
  padding: 0 0.2rem;
}
.wrapper > .shop-list > .shop > .handle {
  width: 1.3rem;
  height: 0.56rem;
  font-size: 0.24rem;
  color: #666;
  text-align: center;
  line-height: 0.56rem;
}
.total {
  text-align: right;
  height: 0.88rem;
  line-height: 0.88rem;
  padding-right: 0.3rem;
  border-bottom: 0.01rem solid #999;
  border-top: 0.01rem solid #999;
  font-size: 0.26rem;
  color: #333;
}
.goods-list {
  width: 100%;
  border-bottom: 0.01rem solid #e7e1e1;
}
.goods-list > .goods-content {
  display: flex;
  height: 100%;
  width: 100%;
  padding: 0.3rem 0;
}
.goods-list > .goods-content > .checkedlist {
  width: 0.8rem;
  display: flex;
  align-items: center;
  margin: 0 0.16rem 0 0.3rem;
}
.goods-list > .goods-content > .checkedlist > .mint-checklist {
  width: 0.44rem;
  height: 0.44rem;
  color: #fff;
}
.goods-list > .goods-content > .goodImg {
  width: 1.8rem;
  height: 1.8rem;
}
.goods-list > .goods-content > .goodImg > img {
  width: 100%;
  height: 100%;
}
.goods-list > .goods-content > .good-message {
  margin: 0 0.2rem 0 0.3rem;
  width: 4.5rem;
}
.name,
.detail,
.type {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: \\65b9\6b63\4e2d\7b49\7ebf\7b80\4f53;
  font-size: 0.24rem;
}
.goods-list > .goods-content > .good-message > .name {
  color: #333;
  padding-bottom: 0.13rem;
}
.goods-list > .goods-content > .good-message > .detail {
  color: #333;
  padding-bottom: 0.13rem;
  display: block;
}
.goods-list > .goods-content > .good-message > .type {
  color: #999;
  margin-bottom: 0.42rem;
}
.goods-list > .goods-content > .good-message > .price-num {
  display: flex;
  justify-content: space-between;
}
.goods-list > .goods-content > .good-message > .price-num > .price {
  font-family: Arial-Regular;
  font-size: 0.26rem;
  color: #9b885f;
}
.goods-list > .goods-content > .good-message > .price-num > .num-box {
  border: 0.01rem solid #999;
}
.goods-list > .goods-content > .good-message > .price-num > .num-box > span {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 0.1rem 0.2rem;
  font-size: 0.3rem;
}
.goods-list > .goods-content > .good-message > .price-num > .num-box > .num {
  width: 0.8rem;
  border: 0;
  display: inline-block;
  border-left: 0.01rem solid #999;
  border-right: 0.01rem solid #999;
  font-size: 0.3rem;
  height: 100%;
  line-height: 0.48rem;
  text-align: center;
}
.footer {
  background: #fff;
  width: 100%;
  height: 1.2rem;
  border-top: 0.01rem solid #999;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer > .checkedInput {
  line-height: 1.2rem;
}
.footer .total-goods {
  margin-left: -2rem;
}
.footer .total-goods .totle-price {
  font-family: Arial-Regular;
  font-size: 0.26rem;
  color: #9b885f;
  margin-bottom: 0.09rem;
}
.footer .total-goods .num-goods {
  font-family: \\65b9\6b63\4e2d\7b49\7ebf\7b80\4f53;
  font-size: 0.24rem;
  color: #00000f;
}
.footer .toAccountButton {
  width: 2.3rem;
  height: 100%;
  background: #9b885f;
  color: #fff;
  font-family: \\65b9\6b63\4e2d\7b49\7ebf\7b80\4f53;
  font-size: 0.3rem;
  text-align: center;
  line-height: 1.2rem;
  float: right;
}
</style>
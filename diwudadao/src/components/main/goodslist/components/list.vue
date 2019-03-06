<template>
  <div class="list-wrapper" ref="goodslistWrapper">
    <ul class="content" v-if="list.length !== 0">
      <li class="goods" v-for="(item,index) in list" id="item.id">
        <router-link :to="'/goodinfo/'+item.product_id" class="toDetails">
          <div class="imgBox">
          <img :src="item.big_thumb" alt>
        </div>
        <div class="message">
          <p class="name">{{item.brand_en_name}}</p>
          <p class="cname">{{item.brand_cnname}}</p>
          <P class="price">
            <span class="product_price">￥{{item.product_price}}</span>
            <span class="market-price">￥{{item.market_price}}</span>
          </P>
        </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  props: ["list"],
  mounted() {
    let scroll = new BScroll(this.$refs.goodslistWrapper, {
      click:true,
      tap:true
    });
  },
};
</script>

<style lang="" scoped>
.list-wrapper {
  width: 100%;
  height: 100%;
}
.list-wrapper>.content{
    overflow: hidden;
    
}
.list-wrapper>.content>.goods{
    width:50%;
    float: left;
  border-bottom: .01rem solid #999;

}
.list-wrapper>.content>.goods>.toDetails>.imgBox{
    width: 100%;
    height: 3.72rem;
    display: flex;
    justify-content: center;
}
.list-wrapper>.content>.goods>.toDetails>.imgBox>img{
    height: 100%;
}
.list-wrapper>.content>.goods>.toDetails>.message{
    margin: .4rem .3rem .6rem;
    text-align: center;
    font-weight: 400;
}
.list-wrapper>.content>.goods>.toDetails>.message>p{
  text-align: center;
}
.list-wrapper>.content>.goods>.toDetails>.message>.name{
  font-size: .26rem;
  color: #333;
  padding-bottom: .12rem
}
.list-wrapper>.content>.goods>.toDetails>.message>.cname{
  font-size: .24rem;
  color: #999;
  padding-bottom: .16rem;
}
.list-wrapper>.content>.goods>.toDetails>.message>.price>.product_price{
  font-size: .24rem;
  color: #9b885f;
}
.list-wrapper>.content>.goods>.toDetails>.message>.price>.market-price{
    font-size: .24rem;
    color: #999;
    text-decoration: line-through;
}
.list-wrapper>.content>.goods:nth-of-type(2n-1){
  border-right: .01rem solid #999;
}
</style>
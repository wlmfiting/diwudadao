<template>
    <div class="flash_sales">
      <ul class="flash-list">
        <li class="flash-box" v-for="(item) in flash_sales">
          <a @click="handleChangePathTo(item.target_url)">
            <div class="imgBox">
              <img :src="item.sales_thumb" alt>
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
                <img :src="item.sales_logo" alt>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    computed: {
    ...Vuex.mapState({
      flash_sales: state => state.home.flash_sales
    }),
  },
    methods: {
        handleChangePathTo(link,id){
            obj.handleClickTo(link,id,this)
        },
        handleChangePathImg(params){
            obj.changeImgPath(params)
        }
  }
}
</script>

<style lang="" scoped>
.flash_sales > .flash-list > .flash-box {
  margin-bottom: 0.2rem;
  background: #fff;
}
.flash_sales > .flash-list > .flash-box > a {
  color: #7e8c8d;
}
.flash_sales > .flash-list > .flash-box > a > .imgBox {
  width: 100%;
}
.flash_sales > .flash-list > .flash-box > a > .imgBox > img {
  width: 100%;
}
.flash_sales > .flash-list > .flash-box > a > .flash-content {
  display: flex;
  padding: 0.26rem 0.2rem;
}
.flash_sales > .flash-list > .flash-box > a > .flash-content > .conleft {
  flex: 1;
  font-family: \\9ed1\4f53;
  font-size: 0.28rem;
  font-weight: 700;
}
.flash_sales> .flash-list> .flash-box> a> .flash-content> .conleft> .name {
  margin-bottom: 0.14rem;
  width: 70%;
}
.flash_sales> .flash-list> .flash-box> a> .flash-content> .conleft> .name> .title {
  margin-right: 0.24rem;
  color: #333;
}
.flash_sales> .flash-list
  > .flash-box> a> .flash-content> .conleft> .name> .price {
  color: #f33;
}
.flash_sales> .flash-list> .flash-box> a> .flash-content> .conleft> .details {
  color: #999;
  font-size: 0.26rem;
  font-weight: 400;
}
.flash_sales > .flash-list > .flash-box > a > .flash-content > .conright {
  width: 1.2rem;
  height: 0.6rem;
  margin-top: 0.04rem;
}
.flash_sales > .flash-list > .flash-box > a > .flash-content > .conright > img {
  width: 100%;
  height: 100%;
}
</style>
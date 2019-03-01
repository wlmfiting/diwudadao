<template>
    <div class="artical-list">
      <div class="gg-artical-list" v-for="(item,index) in articalList">
        <div class="altical-content">
          <a @click="handleChangePathTo(item.ad_link)" class="skipTo">
            <img :src="item.ad_code" :alt="item.ad_code">
            <div class="content-text">
              <h3>{{item.ad_name}}</h3>
              <p>{{item.ad_title}}</p>
            </div>
            <div class="clearscroll" v-if="item.product_info.length != 0">
              <div class="wrapper" ref="wrapper">
                <ul class="content">
                  <li v-for="(product) in item.product_info">
                    <a>
                      <div class="productImg">
                        <img :src="handleChangePathImg(product.product_thumb)">
                      </div>
                      <p class="produce-name">{{product.brand_name}}</p>
                      <p class="produce-price">{{product.ad_subtitle}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
import Vuex from "vuex"
import BScroll from "better-scroll";
import obj from "../../../../common/js/common/pathchange.js" 
export default {
    props:{
        articalList:Array
    },
    methods: {
        handleChangePathTo(link,id){
            return obj.handleClickTo(link,id,this)
        },
        handleChangePathImg(params){
            return obj.changeImgPath(params)
        }
    },
    mounted() {
       console.log(2,this.articalList) 
        this.$nextTick(()=>{
            console.log(2,this.$refs)
            console.log(this.$refs.wrapper)
            if(this.$refs.wrapper){
                console.log(1)
                for (let i = 0, len = this.$refs.wrapper.length; i < len; i++) {
                    console.log(this.$refs.wrapper[i])
                    
                }
            }
            
        })
        
    },
};
</script>

<style lang="" scoped>
.artical-list > .gg-artical-list > .altical-content > .skipTo > .content-text {
  text-align: left;
  padding: 0.36rem 0.4rem 0 0.4rem;
  background: #fff;
  font-family: \\9ed1\4f53;
}
.artical-list> .gg-artical-list> .altical-content> .skipTo> .content-text> h3 {
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
.artical-list> .gg-artical-list> .altical-content> .skipTo> .content-text> p {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 0.24rem;
  color: #999;
  padding-bottom: 0.4rem;
  line-height: 0.36rem;
  border-bottom: 0.01rem solid #999;
}
.clearscroll > .wrapper {
  overflow: hidden;
  padding: 0.4rem 0.2rem;
  background: #fff;
  overflow-x: scroll;
}
.clearscroll > .wrapper > .content {
  display: flex;
  width: max-content;
}
.clearscroll > .wrapper > .content > li {
  flex: 0 0 2.6rem;
  width: 2.6rem;
  padding: 0 0.2rem;
}
.clearscroll > .wrapper > .content > li > a {
  display: block;
  color: #7e8c8d;
}
.clearscroll > .wrapper > .content > li > a > .productImg {
  width: 100%;
  height: 2.6rem;
}
.clearscroll > .wrapper > .content > li > a > .productImg > img {
  height: 100%;
  width: 100%;
}
.clearscroll > .wrapper > .content > li > a > .produce-name {
  font-family: Aria;
  font-size: 0.26rem;
  padding: 0.2rem 0 0.1rem;
  color: #333;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
}
.clearscroll > .wrapper > .content > li > a > .produce-price {
  font-family: Aria;
  font-size: 0.24rem;
  color: #999;
  text-align: center;
}
</style>
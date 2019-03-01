<template>
<div class="person">
    <slot name='tittle'></slot>
    <slot name='tittle_en'></slot>
    <div class="wrapper" ref="personWrapper">
     <slot name='info'></slot>
  </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import Vuex from 'vuex'
export default {
    computed: {
      
    },
    mounted () {
         if(!this.scroll){
        this.scroll = new Bscroll(this.$refs.personWrapper, {
              scrollX:true,
               click: true,
                tap: true
          })
        }
    }
}

</script>
<style lang="">
    .person{width: 100%;padding: .4rem;margin-top: .2rem;background: #fff;}
    .person .tittle{width: 100%;display: flex;justify-content: space-between;padding-bottom: .5rem;font-size: .3rem;font-weight: 700;}
    .person .tittle>p:nth-of-type(2){color: #333;font-weight: 500;}
    .personcont{display: flex;width: max-content;background:#f2f2f2;}
    .perInfo{width:5.12rem;margin-right:1rem;border-radius: .2rem;overflow: hidden;}
    .perifont{background: #fff;padding: .1rem;line-height: .32rem }
    .country{width:2.6rem;margin-right:.3rem;background: #fff;border: 1px solid #333;overflow: hidden;}
    .country a{width: 2.6rem;height: 100%;display: block;}
    .countryimg{width: 100%;height: 2rem;}
    .countryfont{line-height: .48rem;padding: .2rem;}
    .countryfont>img{width: .6rem;float: left;}

    .tit{width: 100%;display: flex;justify-content: space-between;padding-bottom: .1rem;font-size: .3rem;font-weight: 700;}
    .tit_en{padding-bottom: .5rem;color: #999;}
    .hosete{width: max-content;display: flex;background:#f2f2f2;}
    .hose{width: 4rem;margin-right: .2rem;background: #fff;}
    .hose img{width: 100%;height: 3.2rem;}
    .hosefont{padding: .4rem 0;font: 700 .3rem/1.2 '微软雅黑';text-overflow:ellipsis;white-space:nowrap;overflow: hidden;}
    .hosefont2{color: #999;padding-bottom: .3rem;font-size: .28rem}
    .hosefont2>span{color:cornflowerblue;}
    .person ul li:last-of-type{margin-right: 0;}
</style>
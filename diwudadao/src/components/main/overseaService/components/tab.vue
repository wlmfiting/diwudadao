<template>
    <div class="wrapper tab" ref="wrapper">
        <ul class="content wrapcont">
            <li v-for="item in scrollList"><img :src="item.ad_code"></li>
        </ul>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import Vuex from 'vuex'
export default {
    
    computed: {
        ...Vuex.mapState({
            scrollList:state=>state.overseaService.scrollList
        })
    },
    created() {
    //   requestData().then((res) => {
    //     this.data = res.data
    //     this.$nextTick(() => {
    //       this.scroll = new Bscroll(this.$refs.wrapper, {
    //           scrollX:true
    //       })
    //     })
    //   })
    },
    updated () {
        
        if(!this.scroll){
        this.scroll = new Bscroll(this.$refs.wrapper, {
              scrollX:true
          })
        }
       
    }
}
</script>
<style lang="" scoped>
    .wrapcont{display: flex;width: max-content;}
    .tab{background: #fff;}
</style>
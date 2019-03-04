<template>
    <div class="gglist">
       <div class="gglist-four">
           <div v-for="(item) in list">
                <a @click="handleChangePathTo(item.ad_link,'cata_id=0')">
                    <img :src="item.ad_code" :alt="item.ad_name">
                </a>
            </div>
       </div>
         <slot></slot>
    </div>
</template>

<script>
import Vuex from "vuex"
import obj from "../../../../common/js/common/pathchange.js"
export default {
    created() {
        this.handleDateHomeRecommend();
    },
    computed: {
        ...Vuex.mapState({
            list:state=>state.home.recommend
        })
    },
    methods: {
        ...Vuex.mapActions({
            handleDateHomeRecommend:"home/handleDateHomeRecommend"
            
        }),
        handleChangePathTo(link, params) {
            let nlink = link.replace(/^(http:\/\/m\.5lux\.com)|(http:\/\/www\.5lux\.com)/, "/api");
            let newlink = nlink.match(/[0-9]+$/)
            let id = newlink[0];
            this.$router.push("/brand/detail/"+id+"?"+params);
        },
    }
}
</script>

<style lang="" scoped>
    .gglist{
        background: #f2f2f2;
        margin-bottom: .2rem;
    }
    .gglist-four{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: .06rem;
    }
   .gglist-four>div{
        margin-bottom: .14rem;
    }
</style>
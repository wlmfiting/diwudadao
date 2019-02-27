<template>
    <div class="gglist">
       <div class="gglist-four">
           <div v-for="(item) in list">
                <router-link :to="item.ad_link">
                    <img :src="item.ad_code" :alt="item.ad_name">
                </router-link>
            </div>
       </div>
         <slot></slot>
    </div>
</template>

<script>
import Vuex from "vuex"
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
        })
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
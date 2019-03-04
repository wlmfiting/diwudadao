<template>
    <div class="listGoods">
        <Header-com :name="goodsItems.brand_name"/>
        <List-com :list="goodsItems.goods_list" v-if="JSON.stringify(goodsItems) !== '{}'"/>
    </div>
</template>

<script>
import Header from "./components/header"
import List from "./components/list"
import Vuex from "vuex"
export default {
    components:{
        "Header-com":Header,
        "List-com":List,
    },
    data () {
        return {
            goodsItems:{}      
        }
    },
    created() {
    this.handleHomeGoodsList({
      id: this.$route.params.id,
      cata_id: this.$route.query.cata_id
    });
    console.log(this.goodsList)
    console.log(JSON.stringify(this.goodsList) !== '{}')
    },
    computed: {
        ...Vuex.mapState({
        goodsList: state => state.home.goodsList
        })
    },
    watch: {
        goodsList(val){
            this.goodsItems = val;
            console.log(this.goodsItems)
        }
    },
    beforeMount () {
        console.log(this.goodsList)
    },
    updated() {
        console.log(this.goodsList)
    },
    methods: {
        ...Vuex.mapActions({
        handleHomeGoodsList: "home/handleHomeGoodsList"
        })
    }
}
</script>

<style lang="" scoped>
    .listGoods{
        height: 100%;
    }
</style>
<template>
    <div class="classify">
        <mt-popup v-model="popupVisible" position="right"  popup-transition="popup-fade" >
            <div>
                <!-- <div class="content" v-for="(item) in goodsList">
                    <p class="title">{{item}}</p>
                </div> -->
            </div>
        </mt-popup>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    data() {
        return {
            popupVisible: "",
        }
    },
    computed: {
        // ...Vuex.mapState({
        // goodsList: state => state.home.goodsList
        // })
        
    },
    created () {
        // console.log(goodsList)
    }
}
</script>

<style lang="" scoped>
    
</style>
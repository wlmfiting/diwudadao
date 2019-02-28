<template>
    <div class="success">
        <div class="tittle">
            <!-- <p>{{case.sucess_title}}</p> -->
            <p>查看更多 ></p>
        </div>
         <!-- <p class="tittle_en">{{case.sucess_en_title}}</p> -->
    </div>
</template>
<script>
import Vuex from 'vuex'
export default {
    computed: {
        ...Vuex.mapState({
        successcase: state => state.overseaService.successcase,
        
        }),
    }, 
    updated () {
        console.log(this.case)
    }
        
}
</script>
<style scoped>
    .success{width: 100%;background: #fff;padding: .4rem;margin-top: .3rem;}
    .tittle{width: 100%;display: flex;justify-content: space-between;padding-bottom: .1rem;font-size: .3rem;font-weight: 700;}
    .tittle_en{padding-bottom: .5rem;color: #999;}
</style>
<template>
    <div class="success">
        <div class="tittle">
            <!-- <p>{{case.}}</p> -->
            <p>查看更多 ></p>
        </div>
         <!-- <p class="tittle_en">{{case.sucess_en_title}}</p> -->
    </div>
</template>
<script>
import Vuex from 'vuex'
export default {
    data () {
        return {
            successcase:{}
        }
    },
    computed: {
        ...Vuex.mapState({
        case: state => state.overseaService.successcase, 
        }),
        success(){
            return this.successcase
        }
    }, 
    mounted() {
        this.$nextTick(() => {
        this.successcase=this.case
        console.log(22,this.case)
         })
    },
    watch: {
        successcase(old,ne){
            console.log(3,old,ne)
        }
    },
        
    
}
</script>
<style scoped>
    .success{width: 100%;background: #fff;padding: .4rem;margin-top: .3rem;}
    .tittle{width: 100%;display: flex;justify-content: space-between;padding-bottom: .1rem;font-size: .3rem;font-weight: 700;}
    .tittle_en{padding-bottom: .5rem;color: #999;}
</style>
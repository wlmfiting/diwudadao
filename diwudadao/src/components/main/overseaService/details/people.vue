<template>
    <div v-if="flag">
        <div class="peoImg">
            <img :src="people.expert_info.expert_detail_img">
        </div>
        <div class="peoinfo">
            <h2>专家介绍</h2>
            <p>{{people.expert_info.expert_speciality}}</p>
            <p>{{people.expert_info.expert_summary}}</p>
            <p>{{people.expert_info.expert_describe}}</p>
        </div>
 
    </div>
</template>
<script>
import Vuex from 'vuex';
export default {
    data() {
        return {
            flag:false
        }
    },
    created(){
        this.handelPeoData({expert_id:this.id})
    },
    props: {
        id:String
    },
    methods: {
        ...Vuex.mapActions({
            handelPeoData:'overseaService/handelPeoData'
        })
    },
    computed: {
        ...Vuex.mapState({
            people:state=>state.overseaService.people
        })
    },
   watch: {
       people(){
           if(this.people){
               this.flag=1
           }
       }

   },

}
</script>
<style lang="" scoped>
    .peoImg{width: 100%}
    .peoImg>img{width: 100%;}
    .peoinfo{width: 100%;padding: .3rem;}
    .peoinfo>p{padding: .3rem 0; font-size: .3rem;}
</style>


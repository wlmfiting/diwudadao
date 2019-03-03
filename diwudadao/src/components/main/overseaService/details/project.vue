<template>
    <div v-if="flag">
        <div class="head">
            <div class="head1"><img :src="project.project_images[0]" ></div>
            <div class="head2">
                <h2>{{project.share_info.share_title}}</h2>
                <p>{{project.project_info.flag}}:<span>{{project.project_info.discount_price}}</span></p>
                <p>{{project.project_info.label[0]}}</p>
            </div>
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
        this.handelprojectData({mtoken:'',project_id:this.id})
    },
    props: {
        id:String
    },
    methods: {
        ...Vuex.mapActions({
            handelprojectData:'overseaService/handelprojectData'
        })
    },
    computed: {
        ...Vuex.mapState({
            project:state=>state.overseaService.project
        })
    },
   watch: {
       project(){
           if(this.project){
               this.flag=1
           }
       }

   },

}
</script>
<style lang="" scoped>
    .head{width: 100%;position: relative;}
    .head>.head1{width: 100%;}
    .head>.head1>img{width: 100%;height: 5.60rem;}
    .head>.head2{position: absolute;margin: 0 .3rem;bottom: -1.8rem;background: #fff;z-index: 2;padding: .4rem .2rem;width: 6.9rem}
    .head>.head2>P:nth-of-type(1){padding: .3rem 0;font-size: .3rem}
    .head>.head2>P:nth-of-type(1)>span{padding: 0 .2rem;font-size: .3rem;color: blueviolet;}
    .head>.head2>P:nth-of-type(2){padding: .1rem;font-size: .20rem;color: #999;border: 1px solid gray;width: 3.5rem;text-align: center;}

</style>


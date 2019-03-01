<template>
    <div id="country">
        <div class="wrapper countryWrapper" ref="countryWrapper">
            <div class="content">
                <Info-con></Info-con>
                <Module-con :email='countryInfo.project_info'></Module-con>
                <Module-con :email='countryInfo.project_info'></Module-con>
                <Success :email='countryInfo.country_success_case'></Success>
            </div>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex";
import Info from './country/info.vue'
import Module from './country/module.vue'
import Success from './country/case.vue'
import Bscroll from "better-scroll";
export default {
    computed: {
        ...Vuex.mapState({
            countryInfo:state=>state.overseaService.countryInfo
        })
    },
    components:{
        'Info-con':Info,
        'Module-con':Module,
        'Success':Success
    },
    props:{
        id:Number
    },
    created() {
        this.handelDataCountry({page:1,country_id:this.id})
    },
    methods: {
        ...Vuex.mapActions({
            handelDataCountry:'overseaService/handelDataCountry'
        })
    },
    mounted() {
    if (!this.scroll) {
      this.scroll = new Bscroll(this.$refs.countryWrapper, {
        click: true,
        tap: true
      });
    }  
  }
    
    
}
</script>
<style lang="" scoped>
    #country{background: #f2f2f2;width: 100%;height: 100%;}
    .countryWrapper{height: 100%;}
    
</style>
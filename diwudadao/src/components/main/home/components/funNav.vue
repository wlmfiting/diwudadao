<template>
    <div class="fun-nav">
       <ul>
           <li v-for="(item) in navlist">
               <a @click="handleChangePathTo(item.ad_link)">
                   <img :src="item.ad_code" alt="">
                   <span>{{item.ad_name}}</span>
               </a>
           </li>
       </ul>
    </div>
</template>

<script>
import Vuex from "vuex";
import obj from "../../../../common/js/common/pathchange.js"
export default {
    computed: {
        ...Vuex.mapState({
            navlist:state=>state.home.navlist
        })
    },
    methods: {
        handleChangePathTo(url){
            console.log(obj)
            obj.handleClickTo(url,"",this)
            
        }
    }
}
</script>

<style lang="" scoped>
    .fun-nav{
        width: 100%;
        height: 1.5rem;
        background: #f2f2f2;
    }
    .fun-nav>ul{
        width: 100%;
        height: 100%;
        
    }
    li{
        width: 20%;
        height: 100%;
        float: left;
    }
    a{
        width: 100%;
        height: 100%;
        color: #7e8c8d;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    img{
        width: .5rem;
    }
    a>span{
        padding-top: 8%;
    }
</style>
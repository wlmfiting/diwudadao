<template>
    <div class="footer-home">
        <ul class="">
            <li v-for="(item) in list">
                <router-link :to="item.path">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.name}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    // created() {
    //     this.axios.get("https://apim.restful.5lux.com.cn//index/columu_recommend")
    //     .then(data=>{
    //         console.log(data);
    //     })
    // },
    data(){
        return{
            list:[
                {
                    icon:"&#xe644;",
                    name:"首页",
                    path:"/"
                },
                {
                    icon:"&#xe619;",
                    name:"商城",
                    path:"/mall"
                },
                {
                    icon:"&#xe663;",
                    name:"海外服务",
                    path:"/overservice"
                },
                {
                    icon:"&#xe61e;",
                    name:"到店",
                    path:"/store"
                },
                {
                    icon:"&#xe607;",
                    name:"我的",
                    path:"/my"
                }
            ]
        }
    }
}
</script>

<style lang="" scoped>
    .footer-home{
        width: 100%;
        height: .96rem;
        background: #000;
        position: fixed;
        bottom: 0;
        left: 0;
    }
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    li>a{
        width: 1.5rem;
        display: inline-block;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: .2rem;
    }
    i{
        font-size: .5rem;
        margin-bottom: .1rem;
    }
    .router-link-exact-active{
        color: #fff;
    }
</style>
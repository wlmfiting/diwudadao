import Vue from 'vue'
import Router from 'vue-router'
import Country from '@/components/main/overseaService/details/country'
import people from '@/components/main/overseaService/details/people'
import project from '@/components/main/overseaService/details/project'
import Register from "@/components/registerLogin/register"
import Login from "@/components/registerLogin/login"
import Cart from "@/components/cart/cart"
import goodinfo from '@/components/main/goodshop/goodinfo'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:"/",
      // component:Home
      component:(resolve)=>require(["@/components/main/home/home"],resolve)
    },
    {
      path: '/home',
      name: 'home',
      // component: Home
      component:(resolve)=>require(["@/components/main/home/home"],resolve)
    },
    {
      path: '/mall',
      name: 'mall',
      // component: Mall
      component:(resolve)=>require(["@/components/main/mall/mall"],resolve)
    },
    {
      path: '/store',
      name: 'store',
      // component: Store
      component:(resolve)=>require(["@/components/main/store/store"],resolve)
    },
    {
      path:"/my",
      name:"my",
      // component:My
      component:(resolve)=>require(["@/components/main/my/my"],resolve)
    },
    {
      path:"/overservice",
      name:"overService",
      // component:OverService
      component:(resolve)=>require(["@/components/main/overseaService/overservice"],resolve)
    },
    {
      path:"/cart",
      name:"cart",
      component:Cart,
      meta:{
        footerflag:true
      }
    },
    {
      path:"/register",
      name:"register",
      component:Register,
      meta:{
        footerflag:true
      }
    },
    {
      path:"/login",
      name:"login",
      component:Login,
      meta:{
        footerflag:true
      }
    },
    {
      path:"/country/:id",
      name:"country",
      component:Country,
      props:true
    },
    {
      path:"/people/:id",
      name:"people",
      component:people,
      props:true
    },
    {
      path:"/project/:id",
      name:"project",
      component:project,
      props:true
    },
    {
      path:"/goodinfo/:id",
      name:"goodinfo",
      component:goodinfo,
      props:true,
      meta:{
        footerflag:true
      }
    },
    {
      path:"/brand/detail/:id",
      name:"brandlist",
      component:(resolve)=>require(["@/components/main/goodslist/goodslist"],resolve),
      props:true,
      meta:{
        footerflag:true
      }
    },



    //网址错误的报错信息
    {
      path:"**",
      // component:ErrorHome
      component:(resolve)=>require(["@/components/error/error"],resolve)
    },
    
  ]
})


  export default router
import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/main/home/home'
// import Mall from "@/components/main/mall/mall"
import OverService from "@/components/main/overseaService/overservice"
import Store from "@/components/main/store/store"
import My from "@/components/main/my/my"
import ErrorHome from "@/components/error/error"

Vue.use(Router)

export default new Router({
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
      components:(resolve)=>require(["@/components/main/mall/mall"],resolve)
    },
    {
      path: '/store',
      name: 'store',
      // component: Store
      components:(resolve)=>require(["@/components/main/store/store"],resolve)
    },
    {
      path:"/my",
      name:"my",
      // component:My
      components:(resolve)=>require(["@/components/main/my/my"],resolve)
    },
    {
      path:"/overService",
      name:"overService",
      // component:OverService
      components:(resolve)=>require(["@/components/main/overseaService/overservice"],resolve)
    },
    {
      path:"/error",
      // component:ErrorHome
      components:(resolve)=>require(["@/components/error/error"],resolve)
    }
  ]
})
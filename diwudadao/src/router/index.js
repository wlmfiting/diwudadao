import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/main/home/home'
// import Mall from "@/components/main/mall/mall"
import OverService from "@/components/main/overseaService/overservice"
import Store from "@/components/main/store/store"
import My from "@/components/main/my/my"
import ErrorHome from "@/components/error/error"
import Country from '@/components/main/overseaService/details/country'
import people from '@/components/main/overseaService/details/people'
import project from '@/components/main/overseaService/details/project'
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
      path:"/error",
      // component:ErrorHome
      component:(resolve)=>require(["@/components/error/error"],resolve)
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
  ]
})

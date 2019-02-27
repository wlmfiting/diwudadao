import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/main/home/home'
import Mall from "@/components/main/mall/mall"
import OverService from "@/components/main/overseaService/overservice"
import Store from "@/components/main/store/store"
import My from "@/components/main/my/my"
import ErrorHome from "@/components/error/error"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      component:Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/mall',
      name: 'mall',
      component: Mall
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path:"/my",
      name:"my",
      component:My
    },
    {
      path:"/overService",
      name:"overService",
      component:OverService
    },
    {
      path:"/error",
      component:ErrorHome
    }
  ]
})

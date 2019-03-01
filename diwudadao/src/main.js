// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./common/css/reset.css"
import "./common/js/flexble"
import "./assets/iconfont/iconfont.css"
import store from "./store"
import 'mint-ui/lib/style.css'
import { Field } from 'mint-ui'

Vue.config.productionTip = false


Vue.component(Field.name, Field)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

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
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false


Vue.component(Field.name, Field)

Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551360087333&di=8bb32c320a08eec77052d6cc9c06c300&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fblog%2F201402%2F25%2F20140225192608_xPUNz.thumb.224_0.gif',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551360087333&di=8bb32c320a08eec77052d6cc9c06c300&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fblog%2F201402%2F25%2F20140225192608_xPUNz.thumb.224_0.gif',
  attempt: 1
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

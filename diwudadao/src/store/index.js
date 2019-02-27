import Vue from "vue"
import Vuex from "vuex"
import home from "./home";
import overseaService from './overseaService'
Vue.use(Vuex)

let state = {}
let actions = {}
let mutations = {}
let getters = {}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {
        home,overseaService
    }
})

export default store;
import Vue from "vue"
import Vuex from "vuex"
import home from "./home";
import overseaService from './overseaService';
import mall from "./mall";
import goods from './goods'
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
        home,overseaService,mall,goods
    }
})

export default store;
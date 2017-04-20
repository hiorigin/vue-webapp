/**
 * Created by YML on 2017/4/20.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import search from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        search
    }
})

/**
 * Created by cjun on 2017/1/14.
 */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: '0',
    msg:'newssss'
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    },
    write(state){
      state.msg='新闻'
    }
  },
  getters:{
    count: state => {
      return state.count
    },
    msg: state => {
      return state.msg
    }
  },
  actions: {
    write ({ commit }) {
      commit('write')
    }
  }
})

export default store

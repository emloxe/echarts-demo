import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    time: moment().format('YYYY-MM'),

    sex: {
      // 网评员性别比例
      wangperSum: 1,
      maleSum: 0,
      femaleSum: 0
    }
  },

  getters: {
    // 用于计算相关属性
    startTime: (state) => {
      if (state.time.toString().length === 4) {
        return `${state.time}-01-01`;
      }
      return `${state.time}-01`;
    }
  },

  mutations: {
    setTime(state, data) {
      state.time = data;
    }
  },
  actions: {},
  modules: {}
});

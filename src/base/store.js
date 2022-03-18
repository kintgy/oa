import {createStore} from 'vuex';

export default createStore({
  state: {
    userInfo: JSON.parse(sessionStorage.getItem('userInfo') || '{}'),
  },
  mutations: {
    changeUserInfo(state, payload) {
      console.log(payload)
      state.userInfo = payload;
    }
  },
  actions: {
    EDIT_USER_INFO({commit}, payload) {
      return new Promise((res) => {
        commit('changeUserInfo', payload || {});
        sessionStorage.setItem('userInfo', JSON.stringify(payload));
        res(12233);
      })
    }
  },
  modules: {}
});
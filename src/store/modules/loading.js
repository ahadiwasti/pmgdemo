const loading = {
  state: {
    flag: false,
  },
  mutations: {
    SET_FLAG: (state, flag) => {
      state.flag = flag;
    },
  },
  actions: {
    loading({ commit }, payload) {
      commit("SET_FLAG", payload);
    },
  },
};

export default loading;

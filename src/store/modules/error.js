const error = {
  state: {
    flag: false,
    errorMessage: "",
  },
  mutations: {
    SET_ERROR: (state, flag) => {
      state.flag = flag.status;
      state.errorMessage = flag.message;
    },
  },
  actions: {
    ERROR({ commit }, payload) {
      console.log(payload);
      commit("SET_ERROR", payload);
    },
  },
};

export default error;

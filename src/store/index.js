import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";

import films from "./modules/films";
import ships from "./modules/starships";
import loading from "./modules/loading";
import error from "./modules/error";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    films,
    ships,
    loading,
    error,
  },
  getters,
});

export default store;

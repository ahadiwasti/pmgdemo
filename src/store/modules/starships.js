import { fetchshipsList, fetchnextshipsList, fetchship } from "@/api/starships";

const ships = {
  state: {
    ships: [],
    ship: {},
  },
  mutations: {
    SET_SHIPS_LIST: (state, ships) => {
      state.ships = ships;
    },
    SET_SHIP: (state, ship) => {
      state.ship = ship;
    },
  },
  actions: {
    initshipsList({ commit }) {
      commit("SET_SHIPS_LIST", []);
      return new Promise((resolve, reject) => {
        fetchshipsList()
          .then((response) => {
            commit("SET_SHIPS_LIST", response);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    nextshipList({ commit }, payload) {
      return new Promise((resolve, reject) => {
        fetchnextshipsList(payload.page)
          .then((response) => {
            commit("SET_SHIPS_LIST", response);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    readship({ commit }, id) {
      commit("SET_SHIP", {});
      return new Promise((resolve, reject) => {
        fetchship(id)
          .then((response) => {
            commit("SET_SHIP", response);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};

export default ships;

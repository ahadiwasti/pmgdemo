import { fetchfilmsList, fetchnextfilmsList, fetchfilm } from "@/api/films";

const films = {
  state: {
    list: [],
    film: {},
  },
  mutations: {
    SET_FILMS_LIST: (state, films) => {
      state.list = films;
    },
    SET_FILM: (state, film) => {
      state.film = film;
    },
  },
  actions: {
    initfilmsList({ commit }) {
      commit("SET_FILMS_LIST", []);
      return new Promise((resolve, reject) => {
        fetchfilmsList()
          .then((response) => {
            commit("SET_FILMS_LIST", response);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    nextfilmList({ commit }, page) {
      return new Promise((resolve, reject) => {
        fetchnextfilmsList(page)
          .then((response) => {
            commit("SET_FILMS_LIST", response);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    readFilm({ commit }, id) {
      commit("SET_FILM", {});
      return new Promise((resolve, reject) => {
        fetchfilm(id)
          .then((response) => {
            commit("SET_FILM", response);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};

export default films;

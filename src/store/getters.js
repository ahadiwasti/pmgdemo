const getters = {
  films: (state) => state.films.list,
  film: (state) => state.films.film,
  ships: (state) => state.ships.ships,
  ship: (state) => state.ships.ship,
  loading: (state) => state.loading.flag,
  error: (state) => state.error,
};
export default getters;

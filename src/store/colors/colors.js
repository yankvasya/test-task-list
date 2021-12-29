export default {
  namespaced: true,
  state: {
    colors: [
      {
        items:
          [
            { color: '#1de9b2', num: 27, checked: true },
            { color: '#2fadf6', num: 33, checked: false },
            { color: '#ede752', num: 46, checked: true },
            { color: '#c768f5', num: 13, checked: true },
          ],
      },
      {
        items:
          [
            { color: '#af801a', num: 11, checked: false },
            { color: '#c5b0f5', num: 0, checked: true },
            { color: '#abb9a8', num: 37, checked: true },
            { color: '#6598ae', num: 18, checked: true },
            { color: '#9ed450', num: 30, checked: false },
            { color: '#5ad9f3', num: 42, checked: true },
          ],
      },
      {
        items:
          [
            { color: '#501bec', num: 29, checked: false },
            { color: '#afae88', num: 11, checked: false },
            { color: '#96bd4d', num: 46, checked: true },
            { color: '#e261bd', num: 13, checked: true },
            { color: '#86bdf8', num: 12, checked: false },
            { color: '#133ff0', num: 22, checked: true },
            { color: '#467913', num: 41, checked: false },
            { color: '#42d0d5', num: 29, checked: false },
          ],
      },
    ],
  },
  getters: {},
  mutations: {
    SET_COLORS(state, payload) {
      this.state.colors = payload;
    },
  },
  actions: {
    setDefaultColors({ commit }, colors) {
      commit('SET_COLORS', colors);
    },
  },
};

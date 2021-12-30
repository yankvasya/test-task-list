export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {
    SET_COLORS(state, payload) {
      this.state.colors = payload;
    },
    CHANGE_COLOR_AMOUNT(state, { color, amount = null }) {
      this.state.colors = this.state.colors.map((e) => {
        e.items.map((i) => {
          if (i.color === color) i.num = amount || i.num - 1;

          return i;
        });

        return e;
      });
    },
    CHANGE_VISIBLE(state, payload) {
      this.state.colors = this.state.colors.map((e) => {
        e.items.map((i) => {
          if (i.color === payload) i.checked = !i.checked;

          return i;
        });

        return e;
      });
    },
    CHANGE_LIST_VISIBLE(state, payload) {
      this.state.colors = this.state.colors.map((e) => {
        // поиск нужного листа
        const { stringify } = JSON;
        if (stringify(payload) === stringify(e.items)) {
          if (e.items.every((i) => i.checked) || e.items.every((i) => !i.checked)) {
            e.items.map((i) => {
              i.checked = !i.checked;

              return i;
            });
          } else {
            e.items.map((i) => {
              i.checked = true;

              return i;
            });
          }
        }

        return e;
      });
    },
    SET_NEW_COLOR(state, payload) {
      this.state.colors = this.state.colors.map((e) => {
        e.items.map((i) => {
          if (i.color === payload.old) i.color = payload.new;

          return i;
        });

        return e;
      });
    },
  },
  actions: {
    setDefaultColors({ commit }, colors) {
      commit('SET_COLORS', colors);
    },
    changeColorCount({ commit }, data) {
      const payload = { color: data.color, amount: data?.amount };
      commit('CHANGE_COLOR_AMOUNT', payload);
    },
    changeVisible({ commit }, color) {
      commit('CHANGE_VISIBLE', color);
    },
    changeListVisible({ commit }, list) {
      commit('CHANGE_LIST_VISIBLE', list);
    },
    changeColor({ commit }, data) {
      commit('SET_NEW_COLOR', data);
    },
  },
};

import Vue from 'vue';
import Vuex from 'vuex';

import TodoLists from '@/components/TodoLists/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TodoLists,
  },
});

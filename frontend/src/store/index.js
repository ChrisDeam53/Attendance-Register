import { createStore } from 'vuex';
import { auth } from './AuthModule.js';

const store = createStore({
  modules: {
    auth
  }
});

export default store;

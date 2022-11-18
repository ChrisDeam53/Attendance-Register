import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import Vuex from 'vuex';
import store from './store/index.js';

// createApp(App).use(router).mount('#app');
createApp(App).use(router).use(store).use(Vuex).mount('#app');
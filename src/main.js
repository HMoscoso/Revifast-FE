import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "G-PXDTJ49BGX" }
});


Vue.config.productionTip = false
axios.defaults.baseURL='http://localhost:54043/'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'

Vue.config.productionTip = false

// Tailwind
import '@/assets/css/main.css'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

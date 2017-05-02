import Vue from 'vue'
import svg4everybody from 'svg4everybody'
import App from './components/App.vue'
import store from './store'
import router from './router'

svg4everybody()

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

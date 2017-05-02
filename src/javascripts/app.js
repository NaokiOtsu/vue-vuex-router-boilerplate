import Vue from 'vue'
import VueTouch from 'vue-touch'
import svg4everybody from 'svg4everybody'
import App from './components/App.vue'
import store from './store'
import router from './router'

Vue.use(VueTouch, { name: 'v-touch' })
svg4everybody()

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
// import VueRouter from 'vue-router'
// import Sample from './components/Sample.vue'
// import Sample1 from './components/Sample1.vue'

// Vue.use(VueRouter)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

// const Foo = {
//   template: '<div>Foooo</div>'
// }

// const Bar = {
//   template: '<div>Baroo</div>'
// }

// const User = {
//   template: '<div>{{ $route.params.id }}</div>'
// }

// const routes = [
//   { path: '/foo', component: Sample },
//   { path: '/bar', component: Sample1 },
//   { path: '/user/:id', component: User },
// ]

// const router = new VueRouter({
//   routes
// })

// const app = new Vue({
//   router
// }).$mount('#app')

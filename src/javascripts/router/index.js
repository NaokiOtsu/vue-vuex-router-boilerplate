import Vue from 'vue'
import Router from 'vue-router'
import Foo from '../components/Foo.vue'
import Bar from '../components/Bar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',

  scrollBehavior: () => ({ y: 0 }),

  routes: [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})

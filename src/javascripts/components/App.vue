<template>
  <div class="app-container">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}
    <v-touch tag="button" @tap="increment(1)">+</v-touch>
    <button @click="decrement">-</button>
    <button @click="getDummyData">getDummyData</button>

    <ul>
      <li v-for="data in dummyData">{{ data.title }}</li>
    </ul>

    <svg class="icon-star">
      <use xlink:href="/svg/sprite.svg#icon_rss"></use>
    </svg>

    <router-link to="/">home</router-link>
    <router-link to="/foo">Foo</router-link>
    <router-link to="/bar">Bar</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',

  created () {
    this.getDummyData()
  },

  computed: mapGetters([
    'evenOrOdd',
    'dummyData'
  ]),

  methods: mapActions([
    'increment',
    'decrement',
    'getDummyData'
  ])
}
</script>

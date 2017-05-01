<template>
  <div class="app-container">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement'
  ])
}
</script>

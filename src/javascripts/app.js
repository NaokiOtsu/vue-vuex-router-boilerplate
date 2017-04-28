import Vue from 'vue'

const Child = {
  template: `
    <div class="container" @click="hoge">
      <slot text="hello from child"></slot>
    </div>
  `,
  data: function() {
    return {
      someChildProperty: true
    }
  },
  methods: {
    hoge() {
      console.log(this.$parent.$refs.child.$el)
    }
  }
}

const vm = new Vue({
  el: '#app',
  components: {
    'child-component': Child
  },
  data: {
    message: 'hogeee'
  }
})

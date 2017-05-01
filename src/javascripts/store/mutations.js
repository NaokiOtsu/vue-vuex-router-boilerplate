export default {
  increment (state, num) {
    state.count += num
  },
  decrement (state) {
    state.count -= 1
  },
  getDummyData (state, dummyData) {
    state.dummyData = dummyData
  }
}

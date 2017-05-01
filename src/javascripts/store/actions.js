import api from '../api'

export default {
  increment: ({ commit }, num) => commit('increment', num),
  decrement: ({ commit }) => commit('decrement'),
  getDummyData: ({ commit }) => {
    api.getDummyData(dummyData => {
      commit('getDummyData', dummyData)
    })
  }
}

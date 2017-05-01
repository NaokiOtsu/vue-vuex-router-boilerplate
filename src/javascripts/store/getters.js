export default {
  evenOrOdd: state => (
    state.count % 2 === 0 ? 'even' : 'odd'
  ),
  dummyData: state => (
    state.dummyData
  )
}

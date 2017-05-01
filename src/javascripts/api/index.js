const dummyData = [
  { "id": 1, "title": "hoge", "price": 500 },
  { "id": 2, "title": "fuga", "price": 100 },
  { "id": 3, "title": "bar", "price": 900 }
]

export default {
  getDummyData (callback) {
    setTimeout(() => callback(dummyData), 1000)
  }
}

export default {
  totalCount (state) {
    console.log()
    return state.goodCart.reduce((total, v) => {
      console.log(total, v.count)
      return total + v.count
    }, 0)
  },
  totalprice (state) {
    return state.goodCart.reduce((total, v) => {
      console.log(total, v.count)
      return total + v.count * v.price
    }, 0)
  }
}

import axios from 'axios'

export default {
  getDetails: async ({ commit, dispatch, getters }, payload) => {
    const { data: result } = await axios.get('https://api.myjson.com/bins/zw5av')
    console.log(payload)
    // | Math.floor(Math.random() * result.length)
    const trackIndex = payload
    commit('SET_TRAKING_DETAILS', result[trackIndex])
    if (getters.details.driver && getters.details.status !== 'Motorista em trânsito') {
      dispatch('estimateArrival')
    }
  },
  estimateArrival: async ({ commit, getters }, payload) => {
    // const origins = `${getters.details.address.geolocation.latitude},${getters.details.address.geolocation.longitude}`
    // const destinations = `${getters.details.driver.geolocation.latitude},${getters.details.driver.geolocation.longitude}`
    // const { data: result } = await axios.post('some/backend/api' {
    //   origins,
    //   destinations
    // })
    const { data: result } = await axios.get('https://api.myjson.com/bins/n2oq3')
    commit('SET_TRAKING_ESTIMATE_ARRIVAL', result.rows[0].elements[0])
  }
}

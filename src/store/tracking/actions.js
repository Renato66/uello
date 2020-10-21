import axios from 'axios'

export default {
  getDetails: async ({ commit, dispatch, getters }, payload) => {
    const { data: result } = await axios.get('./base_data.json')
    const trackIndex = payload === undefined ? Math.floor(Math.random() * result.length) : payload
    commit('SET_TRAKING_DETAILS', result[trackIndex])
    if (getters.details.driver && getters.details.status === 'Motorista em trânsito') {
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
    commit('SET_TRAKING_ESTIMATE_ARRIVAL', {
      duration: {
        text: 'Em 1 hora'
      }
    })
  }
}

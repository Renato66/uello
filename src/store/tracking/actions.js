import axios from 'axios'

export default {
  getDetails: async ({ commit, dispatch, getters }, payload) => {
    const { data: result } = await axios.get('https://api.myjson.com/bins/zw5av')
    const trackIndex = payload | Math.floor(Math.random() * result.length)
    commit('SET_TRAKING_DETAILS', result[trackIndex])
    if (getters.details.driver) {
      dispatch('estimateArrival')
    }
  },
  estimateArrival: async ({ commit, getters }, payload) => {
    const origins = `${getters.details.address.geolocation.latitude},${getters.details.address.geolocation.longitude}`
    const destinations = `${getters.details.driver.geolocation.latitude},${getters.details.driver.geolocation.longitude}`
    // const { data: result } = await axios.get('https://api.myjson.com/bins/n2oq3')
    const { data: result } = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
      params: {
        language: 'pt-BR',
        origins,
        destinations,
        key: process.env.VUE_APP_GOOGLE_API_KEY
      }
    })
    commit('SET_TRAKING_ESTIMATE_ARRIVAL', result.rows[0].elements[0])
  }
}

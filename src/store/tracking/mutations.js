export default {
  SET_TRAKING_DETAILS (state, payload) {
    state.details = payload
  },
  SET_TRAKING_ESTIMATE_ARRIVAL (state, payload) {
    state.details = {
      ...state.details,
      estimateArrival: payload
    }
  }
}

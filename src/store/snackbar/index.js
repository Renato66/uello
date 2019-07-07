import getters from './getters'
import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    snackbar: {
      time: 2000,
      color: '',
      visibility: false,
      text: '',
      undo: null
    }
  },
  getters,
  mutations
}

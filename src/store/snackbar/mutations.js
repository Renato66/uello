export default {
  show (state, payload) {
    state.snackbar.visibility = true
    state.snackbar.text = payload.text
    state.snackbar.color = payload.color
  },
  showUndo (state, payload) {
    state.snackbar.time = 5000
    state.snackbar.undo = payload.undo
    state.snackbar.visibility = true
    state.snackbar.text = payload.text
    state.snackbar.color = payload.color
  },
  hide (state) {
    state.snackbar.time = 2000
    state.snackbar.undo = null
    state.snackbar.visibility = false
    state.snackbar.color = ''
    state.snackbar.text = ''
  },
  snackbarAxiosError (state, payload) {
    try {
      if (payload.response.status === 401) {
        state.snackbar.visibility = true
        state.snackbar.text = 'sua sessão está encerrada'
        state.snackbar.color = 'error'
      }
    } catch (error) {
      console.log(error)
      state.snackbar.visibility = true
      state.snackbar.text = 'Sem conexão com a internet'
      state.snackbar.color = 'info'
    }
  },
  snackbarApiError (state, payload) {
    state.snackbar.visibility = true
    state.snackbar.text = payload[0].errorMessage
    state.snackbar.color = 'info'
  }
}

import Vue from 'vue'
import Vuex from 'vuex'
import handler from 'vuex-handler'
import * as Sentry from '@sentry/browser'

import snackbar from './snackbar/'
import tracking from './tracking/'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [
    handler
  ],
  modules: {
    snackbar,
    tracking
  }
})

store.handler = {
  onSuccess (result, type, params, options) {
    return result
  },
  onFailure (error, type, params, options) {
    if (error.message === 'Canceled by the user') {
      return
    }
    store.commit('snackbar/show', {
      visibility: true,
      color: 'error',
      text: 'Ocorreu um erro'
    }, { root: true })
    Sentry.captureException(error, { logger: `${type}` })
    console.log(error)
  }
}

if (module.hot) {
  module.hot.accept(['./snackbar/', './tracking/'], () => {
    const tracking = require('./tracking/').default
    const snackbar = require('./snackbar/').default
    store.hotUpdate({
      modules: {
        snackbar,
        tracking
      }
    })
  })
}

export default store

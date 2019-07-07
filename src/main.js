import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.min.css'
import * as Sentry from '@sentry/browser'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://5d860bd480e946dab159f9eb83974756@sentry.io/1498643',
    integrations: [new Sentry.Integrations.Vue({ Vue })],
    release: '1.0.0',
    environment: process.env.VUE_APP_ENV
  })
  window.sentryUser = false
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

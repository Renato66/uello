import Vue from 'vue'
import Router from 'vue-router'
const TrackingDetails = () => import('./views/TrackingDetails')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/tracking/:index?',
      name: 'trackingDetails',
      component: TrackingDetails
    },
    { path: '/', redirect: { name: 'trackingDetails' } }
  ]
})

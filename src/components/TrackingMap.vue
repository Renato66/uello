<template>
  <v-container>
    <v-layout mb-3>
      <v-flex>
        <b>Mapa</b>
      </v-flex>
    </v-layout>
    <v-layout v-show="!loading && !error && map">
      <v-flex style="height:400px">
        <div ref="map" class="fill-height"></div>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="grey lighten-3 px-3 py-4" v-if="!loading && error">
      <v-flex xs12 class="text-xs-center grey--text text--darken-2 subheader">
        Código não localizado!
      </v-flex>
    </v-layout>
    <v-layout row wrap class="pa-5" v-else-if="loading">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          size="20"
          :width="3"
          color="primary"
        ></v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    tracking: {
      type: Object
    }
  },
  data () {
    return {
      loading: true,
      error: false,
      driverMarker: null,
      addressMarker: null,
      map: null
    }
  },
  methods: {
    loadMap () {
      const driver = { lat: this.tracking.driver.geolocation.latitude, lng: this.tracking.driver.geolocation.longitude }
      const address = { lat: this.tracking.address.geolocation.latitude, lng: this.tracking.driver.geolocation.longitude }
      this.map = new window.google.maps.Map(this.$refs.map, {
        center: driver,
        zoom: 15
      })
      this.driverMarker = new window.google.maps.Marker({ position: driver, map: this.map, icon: 'https://uello.netlify.com/img/delivery-truck.png' })
      this.addressMarker = new window.google.maps.Marker({ position: address, map: this.map, icon: 'https://uello.netlify.com/img/flag.png' })
    },
    loadScript () {
      const script = document.createElement('script')
      script.async = true
      script.defer = true
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.VUE_APP_GOOGLE_API_KEY}&callback=initMap`
      document.querySelector('head').appendChild(script)
    },
    async sleep () {
      await new Promise((resolve, reject) => setTimeout(resolve, 1000))
    },
    async pooling () {
      let tryedTimes = 0
      const limit = 20
      return new Promise(async (resolve, reject) => {
        let processing = true
        while (processing) {
          await this.sleep()
          if (!window.isMapInited && tryedTimes < limit) {
            tryedTimes++
            console.log('try')
          } else if (tryedTimes === limit) {
            processing = false
            reject(new Error('Timeout'))
            break
          } else {
            processing = false
            break
          }
        }
        resolve()
      })
    }
  },
  async mounted () {
    if (this.tracking.status === 'Pedido coletado') {
      this.loading = false
      return
    }
    this.loading = true
    if (!window.isMapInited) {
      this.loadScript()
      try {
        await this.pooling()
      } catch (error) {
        console.log('error on map load', error)
        this.error = true
      }
    }
    this.loadMap()
    this.loading = false
  }
}
</script>

<style>

</style>

<template>
  <v-container>
    <v-layout align-center>
      <v-flex shrink>
        <h1 class="display-1">Status da entrega</h1>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex shrink>
        <v-btn flat outline color="primary" class="text-none">
          Ajuda
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="grey lighten-3 px-3 py-4" v-if="!loading && !error">
      <v-flex xs12>
        <TrackingHeader :tracking="details" />
      </v-flex>
      <v-flex xs12>
        <TrackingProgress :tracking="details" />
      </v-flex>
      <v-flex xs12>
        <v-divider></v-divider>
      </v-flex>
      <v-flex xs6>
        <!-- mapa  -->
      </v-flex>
      <v-flex xs6>
        <TrackingHistory :tracking="details" />
      </v-flex>
    </v-layout>
    <v-layout row wrap class="grey lighten-3 px-3 py-4" v-else-if="error">
      <v-flex xs12 class="text-xs-center grey--text text--darken-2 subheader">
        Código não localizado!
      </v-flex>
    </v-layout>
    <v-layout row wrap class="pa-5" v-else>
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
import TrackingHeader from '@/components/TrackingHeader'
import TrackingProgress from '@/components/TrackingProgress'
import TrackingHistory from '@/components/TrackingHistory'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    TrackingHeader,
    TrackingProgress,
    TrackingHistory
  },
  data () {
    return {
      tracking: null,
      loading: true,
      error: false
    }
  },
  methods: {
    ...mapActions('tracking', ['getDetails'])
  },
  computed: {
    ...mapGetters('tracking', ['details'])
  },
  async mounted () {
    this.loading = true
    console.log('oi')
    try {
      await this.getDetails(this.$route.params.index)
    } catch (err) {
      console.log(err)
      this.error = true
    }
    this.loading = false
  }
}
</script>

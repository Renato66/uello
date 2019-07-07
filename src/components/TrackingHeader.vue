<template>
  <v-container fluid>
    <v-layout mb-5 row wrap>
      <v-flex xs12 sm6 md4>
        <h2 class="body-2 grey--text text-darken-2">
          #1 Numero do pedido
        </h2>
        <div class="pl-1 ml-3 font-weight-bold display-1 grey--text text--darken-4">
          {{ tracking.invoice }}
        </div>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <h2 class="body-2 grey--text text-darken-2">
          <v-icon small>
            mdi-truck
          </v-icon>
          Status
        </h2>
        <div class="pl-1 ml-3 font-weight-bold display-1 accent--text">
          {{ tracking.status }}
        </div>
      </v-flex>
      <v-flex xs12 sm6 md4 v-if="colected">
        <h2 class="body-2 grey--text text-darken-2">
          #1 Data da coleta
        </h2>
        <div class="pl-1 ml-3 mt-2 pt-1 subheading font-weight-bold grey--text text--darken-4">
          {{ colected.date | date }}
        </div>
      </v-flex>
    </v-layout>
    <v-layout mb-5 row wrap>
      <v-flex xs12 sm6 md4>
        <h2 class="body-2 grey--text text-darken-2">
          #1 De
        </h2>
        <div class="pl-1 ml-3 mt-2 pt-1 subheading font-weight-bold grey--text text--darken-4">
          {{ tracking.name }}
        </div>
        <div class="pl-1 ml-3 mt-2 pt-1 subheading font-weight-bold grey--text text--darken-4">
          {{ tracking.address.address }}
        </div>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <h2 class="body-2 grey--text text-darken-2">
          #1 Nota fiscal
        </h2>
        <div class="pl-1 ml-3 mt-2 pt-1 subheading font-weight-bold grey--text text--darken-4">
          {{ tracking.invoice }}
        </div>
      </v-flex>
      <v-flex xs12 sm6 md4 v-if="tracking.driver">
        <h2 class="body-2 grey--text text-darken-2">
          #1 Motorista
        </h2>
        <div class="pl-1 ml-3 mt-2 pt-1 subheading font-weight-bold grey--text text--darken-4">
          {{ tracking.driver.name }} (moto)
        </div>
        <div class="pl-1 ml-3 mt-2 pt-1 subheading font-weight-bold grey--text text--darken-4" v-if="tracking.estimateArrival">
          Previsão: {{ tracking.estimateArrival.duration.text }}
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import format from 'date-fns/format'
export default {
  props: {
    tracking: {
      type: Object
    }
  },
  data () {
    return {
      loading: true
    }
  },
  filters: {
    date (value) {
      return format(value, 'MM/DD/YYYY - HH:mm')
    }
  },
  computed: {
    colected () {
      return this.tracking.history.find(elem => elem.description === 'Pedido coletado')
    }
  }
}
</script>

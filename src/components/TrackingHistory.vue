<template>
  <v-container>
    <v-layout mb-3>
      <v-flex xs6>
        <b>
          Data / hora
        </b>
      </v-flex>
      <v-flex xs6>
        <b>
          Detalhes
        </b>
      </v-flex>
    </v-layout>
    <v-layout v-for="(history, index) in tracking.history" :key="index" mb-1>
      <v-flex xs6>{{ history.date | date }}</v-flex>
      <v-flex xs6>{{ history.description }}</v-flex>
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
  filters: {
    date (value) {
      return format(value, 'MM/DD/YYYY - HH:mm')
    }
  }
}
</script>

<style>

</style>

<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex shrink>
        <v-icon>mdi-inbox</v-icon>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex shrink>
        <v-icon>mdi-cube-send</v-icon>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex shrink>
        <v-icon>mdi-truck</v-icon>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex shrink>
        <v-icon>mdi-human-handsup</v-icon>
      </v-flex>
      <v-flex xs12 px-2>
        <v-progress-linear color="primary" :value="progress"></v-progress-linear>
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
  computed: {
    progress () {
      if (this.tracking.status === 'Solicitação') {
        return 0
      } else if (this.tracking.status === 'Aguardando Coleta') {
        return 34
      } else if (this.tracking.status === 'Motorista em trânsito') {
        return 67
      } else {
        return 100
      }
    }
  }
}
</script>

<style>

</style>

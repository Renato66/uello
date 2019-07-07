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
      return 67
    }
  }
}
</script>

<style>

</style>

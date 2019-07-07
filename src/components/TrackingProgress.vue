<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex shrink class="progress-icon" :class="{'progress-icon--active': progress >= 0 }">
        <v-icon>mdi-inbox</v-icon>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex shrink class="progress-icon" :class="{'progress-icon--active': progress >= 34 }">
        <v-icon>mdi-cube-send</v-icon>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex shrink class="progress-icon" :class="{'progress-icon--active': progress >= 67 }">
        <v-icon>mdi-truck</v-icon>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex shrink class="progress-icon" :class="{'progress-icon--active': progress === 100 }">
        <v-icon>mdi-human-handsup</v-icon>
      </v-flex>
      <v-flex xs12 px-2>
        <v-progress-linear color="primary" background-color="#e4e4e5" height="4" :value="progress"></v-progress-linear>
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

<style lang="stylus">
.progress-icon
  position relative
  &::after
    z-index: 2
    content ''
    bottom: -25px
    left: 2px
    position absolute
    width 20px
    height 20px
    background: #eeeeee
    border-radius: 100%
    border: 4px solid #e4e4e5
  &--active
    &::after
      border-color: #e63b4f!important
</style>

<template>
  <v-snackbar
    :timeout="snackbarShow.time"
    :color="snackbarShow.color"
    :top="true"
    :right="true"
    v-model="snackbarVisibility"
  >
  {{ snackbarShow.text }}
  <v-btn
      dark
      flat
      @click="undoAction"
      v-if="snackbarShow.undo !== null"
      class="ml-2"
    >
      Desfazer
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  methods: {
    undoAction () {
      this.$store.dispatch(this.snackbarShow.undo.action, this.snackbarShow.undo.payload)
      this.$store.commit('snackbar/hide')
    }
  },
  computed: {
    snackbarShow () {
      return this.$store.getters['snackbar/snackbar']
    },
    snackbarVisibility: {
      get () {
        return this.snackbarShow.visibility
      },
      set () {
        this.$store.commit('snackbar/hide')
      }
    }
  }
}
</script>

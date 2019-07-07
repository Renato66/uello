<template>
  <v-app>
    <v-toolbar app dark class="elevation-0 nav primary" style="z-index:4">
      <v-flex class="nav__logo" shrink>
        <a href="https://www.uello.com.br" target="_blank">
          <img src="https://www.uello.com.br/assets/img/logo-uello-branco.png" alt="uello white logo">
        </a>
      </v-flex>
      <v-spacer></v-spacer>
      <a href="https://renato66.github.io" target="_blank">
        <v-avatar
            size="36px"
          >
            <img
              src="https://www.gravatar.com/avatar/44d075eb0dc6e9d7f3528ac2de5c24c3?size=50"
              alt="Avatar"
            >
        </v-avatar>
      </a>
      <a href="https://renato66.github.io" target="_blank" class="white--text" style="text-decoration:none;">
        <div class="ml-2 text-uppercase hidden-xs-only">
          Renato Vicente Frison
        </div>
      </a>
    </v-toolbar>
    <v-content>
      <v-fade-transition leave-absolute>
        <router-view></router-view>
      </v-fade-transition>
    </v-content>
    <Snackbar />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    Snackbar: () => import('@/components/Snackbar')
  }
}
</script>

<style lang="stylus">
.v-btn
  border-radius 6px
.nav
  &__logo
    height 38px
    >a
      >img
        height: 38px
        display: block
</style>

<template>
  <v-app :dark="theme">
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Guess</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outline @click="theme = !theme">
        Toggle Theme
      </v-btn>
    </v-toolbar>

    <v-content>
      <Game/>
    </v-content>
  </v-app>
</template>

<script>
import Game from './components/Game'

export default {
  name: 'App',
  components: {
    Game
  },
  data () {
    return {
      theme: true
    }
  }
}
</script>

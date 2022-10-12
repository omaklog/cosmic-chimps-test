<template>
  <v-toolbar class="d-flex" height="120" title="Cosmic-chimps-app-test" >
    <v-spacer></v-spacer>
    <v-btn icon="" @click="toggleTheme">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
  name: "HomeView",

  setup() {
    const { global } = useTheme()

    const typeCard = ['Vuetify', 'Custom Vuetify', 'Css']

    return {
      toggleTheme: () => global.name.value = global.current.value.dark ? 'light' : 'dark',
      typeCard
    }
  }

}
</script>

<style scoped>

</style>

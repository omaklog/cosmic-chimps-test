<template>
  <v-toolbar class="d-flex" height="120" title="Cosmic-chimps-app-test" >
    <v-combobox
        :items="typeCard"
    ></v-combobox>
    <v-spacer></v-spacer>
    <v-btn icon="" @click="toggleTheme">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
  </v-toolbar>
  <div class="mx-16 mt-4">
    <SearchBar></SearchBar>
  </div>
</template>

<script>
import { useTheme } from 'vuetify'
import SearchBar from '../components/search-bar/SearchBar.vue';

export default {

  name: "HomeView",

  components:{
    SearchBar
  },

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

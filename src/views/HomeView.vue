<template>
  <v-toolbar class="d-flex" height="120" title="Cosmic-chimps-app-test">
    <v-combobox :items="typeCard"/>
    <v-spacer/>
    <v-btn icon="" @click="toggleTheme">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
  </v-toolbar>
  <div class="mx-sm-0 mx-md-16 mt-4">
    <SearchBar/>
  </div>
  <div class="results mx-sm-0 mx-md-16 mt-4 justify-lg-space-between justify-md-space-around justify-sm-space-evenly">
    <QuoteVuetifyCard v-for="(quote) in quotes" :quote="quote" :key="quote.quoteId"/>
  </div>
</template>

<script lang="ts">
import { useTheme } from 'vuetify';
import SearchBar from '../components/search-bar/SearchBar.vue';
import QuoteVuetifyCard from "../components/quote-vuetify-card/QuoteVuetifyCard.vue";
import { useQuotesStore } from "../composables";

export default {

  name: "HomeView",

  components: {
    SearchBar,
    QuoteVuetifyCard
  },

  setup() {

    const { global } = useTheme();

    const { quotes } = useQuotesStore();

    const typeCard = ['Vuetify', 'Custom Vuetify', 'Css'];

    return {
      toggleTheme: () => global.name.value = global.current.value.dark ? 'light' : 'dark',
      typeCard,
      quotes,
    }
  }

}
</script>

<style scoped>
.results {
  display: flex;
  flex-wrap: wrap;
}
</style>

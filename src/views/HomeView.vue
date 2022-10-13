<template>
  <v-toolbar class="d-flex" height="120" title="Cosmic-chimps-app-test">
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
  <div class="results mx-16 mt-4">
    <QuoteVuetifyCard v-for="(quote, index) in quotes" :quote="quote" :key="quote.anime+index"></QuoteVuetifyCard>
  </div>
</template>

<script>
import { useTheme } from 'vuetify'
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

    const dommyQuote = {
      anime: "Dragon Ball",
      character: "Son Goku",
      quote: "How can androids have babies?"
    };

    return {
      toggleTheme: () => global.name.value = global.current.value.dark ? 'light' : 'dark',
      typeCard,
      dommyQuote,
      quotes,
    }
  }

}
</script>

<style scoped>
.results {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}
</style>

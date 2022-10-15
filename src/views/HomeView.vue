<template>
  <v-toolbar class="d-flex" height="120" title="Cosmic-chimps-app-test">
    <v-combobox v-model="cardSelected" :items="typeCard"/>
    <v-spacer/>
    <v-btn icon="" @click="toggleTheme">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
  </v-toolbar>
  <div class="mx-sm-0 mx-md-16 mt-4">
    <SearchBar/>
  </div>
  <div class="results mx-sm-0 mx-md-16 mt-4 justify-lg-space-between justify-md-space-around justify-sm-space-evenly">
    <template  v-for="(quote) in quotes" :key="quote.quoteId">
      <component class="my-4 mx-1" :rounded="true" :quote="quote" :rating="true" v-bind:is="componentRender" ></component>
    </template>
  </div>
</template>

<script lang="ts">
import { useTheme } from 'vuetify';
import SearchBar from '../components/search-bar/SearchBar.vue';
import QuoteVuetifyCard from "../components/quote-vuetify-card/QuoteVuetifyCard.vue";
import QuoteCssCard from "../components/quote-css-card/QuoteCssCard.vue";
import QuoteCustomCard from "../components/quote-custom-card/QuoteCustomCard.vue";
import { useQuotesStore } from "../composables";
import { computed, ref } from "vue";

export default {

  name: "HomeView",

  components: {
    SearchBar,
    QuoteVuetifyCard,
    QuoteCustomCard,
    QuoteCssCard
  },

  setup() {

    const { global } = useTheme();

    const { quotes } = useQuotesStore();

    const typeCard = ['Vuetify', 'Custom Vuetify', 'Css'];

    const cardSelected = ref('Vuetify');

    return {
      toggleTheme: () => global.name.value = global.current.value.dark ? 'light' : 'dark',
      componentRender: computed(()=> {
        switch (cardSelected.value) {
          case 'Vuetify':
            return 'QuoteVuetifyCard'
          case 'Custom Vuetify':
            return 'QuoteCustomCard'
          case 'Css':
            return 'QuoteCssCard'
          default: return 'QuoteVuetifyCard'
        }
      }),
      typeCard,
      quotes,
      cardSelected
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

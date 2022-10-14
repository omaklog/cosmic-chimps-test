<template>
  <v-card
      class="quote-vuetify-card mx-8 mt-8"
      max-width="400"
      min-width="320"
  >
    <v-img
        class="align-end text-white"
        height="200"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
    >
      <v-card-title>{{ quote.anime }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      {{ quote.character }}
    </v-card-subtitle>

    <v-card-text>

      <p class="">{{ quote.quote }}</p>
    </v-card-text>

    <v-card-actions>
      <v-rating
          v-model="quote.rate"
          bg-color="orange-lighten-1"
          color="#FFD600"
      ></v-rating>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Quote } from "../../interfaces/quote";
import { PropType, ref } from "vue";

export default {
  name: "QuoteVuetifyCard",

  props: {
    quote: {
      type: Object as PropType<Quote>,
      required: true
    }
  },

  setup(props: Quote) {

    const rating = ref(0)

    return {
      rating,
      quote: props.quote
    }
  }
}
</script>

<style scoped>
.quote-vuetify-card p{
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>

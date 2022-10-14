<template>
  <v-card
      class="vuetify-card mx-8 my-4"
      max-width="240"
  >
    <v-img
        class="vuetify-card__title align-end text-white"
        height="280"
        :src="quote.image"
    >
      <v-card-title>{{ quote.anime }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-2">
        {{ quote.character }}
    </v-card-subtitle>

    <v-card-text class="pt-2">
      <p class="vuetify-card__description">{{ quote.quote }}</p>
    </v-card-text>
    <v-divider/>
    <v-card-actions>
      <v-rating
          class="justify-center"
          v-model="quote.rate"
          bg-color="orange-lighten-1"
          color="#FFD600"
          @click="onClickRate(quote)"
          hover
          size="32"
      />
      <strong>
        ({{quote.rate}})
      </strong>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Quote } from "../../interfaces/quote";
import { PropType, ref } from "vue";
import { useQuotesStore } from "../../composables";

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
    const { updateAnimeRate } = useQuotesStore()

    return {
      rating,
      quote: props.quote,
      onClickRate: (quote: Quote) => {
        updateAnimeRate(quote);
      }
    }
  }
}
</script>

<style scoped>
.vuetify-card__title{
  text-shadow: 0 0 4px #070707;
}

.vuetify-card__description{
  font-size: 12px;
}


.vuetify-card p {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>

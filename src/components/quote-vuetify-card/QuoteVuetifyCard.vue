<template>
  <v-card
      class="vuetify-card mx-8 my-4"
      max-width="240"
      min-width="240"
      min-height="480"
  >
      <v-img
          class="vuetify-card__title align-end text-white"
          height="280"
          :src="quote.image"
          cover
      />
      <v-card-title>{{ quote.anime }}</v-card-title>
      <v-card-subtitle class="pt-2"> {{ quote.character }}</v-card-subtitle>

      <v-card-text class="pt-2">
        <p class="vuetify-card__description">{{ quote.quote }}</p>
      </v-card-text>
      <v-divider/>
      <v-card-actions v-if="rating">
        <v-rating
            class="justify-center"
            v-model="quote.rate"
            bg-color="orange-lighten-1"
            color="#FFD600"
            :length="length"
            @click="onClickRate(quote)"
            hover
            size="32"
        />
        <strong>
          ({{ quote.rate }})
        </strong>
      </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Quote } from "../../interfaces/quote";
import { useTheme } from "vuetify/dist/vuetify";

export default defineComponent({
  name: "QuoteVuetifyCard",

  props: {
    quote: {
      type: Object as PropType<Quote>,
      required: true
    },
    rating: {
      type: Boolean,
      default: false,
    },
    length: {
      type: Number,
      default: 5,
    },
    loading:{
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const { global } = useTheme();

    return {
      toggleTheme: () => global.name.value = global.current.value.dark ? 'light' : 'dark',
      quote: props.quote,
      onClickRate: (quote: Quote) => {
        emit('on-click-rate', quote)
      }
    }

  }
});
</script>

<style scoped>
.vuetify-card__title {
  text-shadow: 0 0 4px #070707;
}

.vuetify-card__description {
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
.loader {
  width: 48px;
  height: 48px;
  border: 2px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 0;
  background: #FF3D00;
  width: 3px;
  height: 24px;
  transform: translateX(-50%);
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

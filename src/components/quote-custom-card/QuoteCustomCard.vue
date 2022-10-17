<template>
  <v-card class="quote-card d-flex">
    <div v-if="loading" class="vuetify-card__loading">loading...</div>
    <v-img
        class="vuetify-card__title align-end text-white"
        height="180"
        width="120"
        :src="quote.image"
        cover
    >
      <div class="quote-card-title">{{ quote.anime }}
        <template v-if="rating">
          <v-rating
              :length="length"
              class="justify-center"
              v-model="quote.rate"
              bg-color="orange-lighten-1"
              color="#FFD600"
              @click="onClickRate(quote)"
              hover
              size="18"
          />
          <small>
            ({{ quote.rate }})
          </small>
        </template>

      </div>

    </v-img>
    <div class="px-4">
      <div class="mt-4" :class="characterDark">{{ quote.character }}</div>
      <v-divider class="mt-4"/>
      <p :class="quoteDark">{{ quote.quote }}</p>
    </div>

  </v-card>

</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Quote } from "../../interfaces/quote";
import { useTheme } from "vuetify";

export default defineComponent({
  name: "QuoteCustomCard",

  props: {
    quote: {
      type: Object as PropType<Quote>,
      required: true
    },
    rating: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    length: {
      type: Number,
      default: 5,
    }
  },


  setup(props, { emit }) {

    const { global } = useTheme();

    return {
      quoteDark: computed(() => global.current.value.dark ? 'quote-card__quote--dark' : 'quote-card__quote'),
      characterDark: computed(() => global.current.value.dark ? 'quote-card__character--dark' : 'quote-card__character'),
      quote: props.quote,
      onClickRate: (quote: Quote) => {
        emit('on-click-rate', quote)
      }
    }

  }

})
</script>

<style scoped>
.quote-card {
  border: 1px #9a9a9a solid;
  border-radius: 8px;
  width: 310px;
}

.quote-card-title {
  background-color: rgba(26, 26, 26, 0.7);
  padding: 4px;
}

.quote-card__character {
  color: black;
  font-size: 22px;
}

.quote-card__character--dark {
  color: #c2c0c0;
  font-size: 22px;
}

.quote-card__quote {
  margin-top: 16px;
  color: #3d3c3c;
  font-size: 12px;
}

.quote-card__quote--dark {
  margin-top: 16px;
  color: #c2c0c0;
  font-size: 12px;
}

.vuetify-card__loading {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  background-color: #0c0c0c;
  color: white;
  animation: FadeIn 1s ease-in-out infinite;
}

@keyframes FadeIn {
  from {
    background-color: #444343;
  }

  to {
    background-color: #0c0c0c;
  }
}


</style>

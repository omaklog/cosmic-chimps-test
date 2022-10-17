<template>
  <div class="card">
    <template v-if="loading">
      <div class="d-flex justify-center align-center">
        Loading
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>

    </template>
    <template v-else>
      <div class="card__product-img d-flex justify-center">
        <v-img
            :class="isRounded"
            cover
            :src="quote.image"/>
      </div>
      <div class="card__content">
        <div class="card__rate" v-if="rating">
          <v-rating
              class="justify-center"
              v-model="quote.rate"
              :length="length"
              bg-color="orange-lighten-1"
              color="#FFD600"
              @click="onClickRate(quote)"
              hover
              size="18"
          />
          <small>
            ({{ quote.rate }})
          </small>
        </div>
        <p class="card__name">{{ quote.anime }}</p>
        <p class="card__description">{{ quote.quote }}</p>
        <div class="card__content-bottom">

        </div>
      </div>
    </template>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Quote } from "../../interfaces/quote";

export default defineComponent({
  name: "QuoteCssCard",

  emits: ['on-click-rate'],

  props: {
    quote: {
      type: Object as PropType<Quote>,
      required: true
    },
    rating: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    length: {
      type: Number,
      default: 5,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    return {
      isRounded: computed(() => props.rounded ? 'card__img-rounded' : 'card__img'),
      onClickRate: (quote: Quote) => {
        emit('on-click-rate', quote)
      }
    }
  }


})
</script>

<style scoped>
.icon {
  display: flex;
}

.card {
  background-color: #15263F;
  border-radius: 6px;
  color: #8BACD9;
  padding: 16px;
  width: 200px;
  min-height: 120px;
}

.card__content-bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 4px;
}

.card__description {
  font-size: 16px;
  font-weight: lighter;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card__product-img {
  cursor: pointer;
  border-radius: 8px;
}

.card__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card__name {
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.card__rate {
  width: auto;
  top: 0px;
  right: 0px;
  z-index: 999999;
  border-top: 1px solid #2E405A;
}


.card__img {
  box-shadow: 1px 4px 21px -10px rgb(255, 255, 255);
  -webkit-box-shadow: 1px 4px 21px -10px rgb(255, 255, 255);
  -moz-box-shadow: 1px 4px 21px -10px rgb(255, 255, 255);
}

.card__img-rounded {
  border-radius: 16px 0px;
  box-shadow: 1px 4px 21px -10px rgb(255, 255, 255);
  -webkit-box-shadow: 1px 4px 21px -10px rgb(255, 255, 255);
  -moz-box-shadow: 1px 4px 21px -10px rgb(255, 255, 255);
}


.card__img:hover {
  opacity: 0.8;
}

.lds-ripple {
  display: inline-block;
  position: absolute;
  left: 78px;
}

.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}

</style>

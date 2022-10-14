import { useStore } from 'vuex';
import { StateInterface } from "../store";
import { computed } from "vue";
import { Quote } from "../interfaces/quote";

export const useQuotesStore = () => {

    const store = useStore<StateInterface>();

    return {
        searchQuotesByTerm: (query = '', searchParam = '') => store.dispatch('quotes/searchQuotesByTerm', {
            query,
            searchParam
        }),
        updateAnimeRate: (quote:Quote) => store.dispatch('quotes/updateAnimeRate', quote),
        loading: computed(() => store.state.quotes.loading),
        quotes: computed(() => store.state.quotes.quotes)
    }
}

export default useQuotesStore;

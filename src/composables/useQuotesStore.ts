import { useStore } from 'vuex';
import { StateInterface } from "../store";
import { computed } from "vue";

export const useQuotesStore = () => {

    const store = useStore<StateInterface>();

    return {
        searchQuotesByTerm: (query = '', searchParam = '') => store.dispatch('quotes/searchQuotesByTerm', {
            query,
            searchParam
        }),
        loading: computed(() => store.state.quotes.loading),
        quotes: computed(() => store.state.quotes.quotes)
    }
}

export default useQuotesStore;

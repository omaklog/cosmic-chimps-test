import { useStore } from 'vuex';
import { StateInterface } from "../store";
import { computed } from "vue";

export const useQuotesStore = () => {
    const store = useStore<StateInterface>();

    return {
        searchQuotesByTerm: (query = '') => store.dispatch('quotes/searchQuotesByTerm', query),
        loading: computed(() => store.state.quotes.loading)
    }
}

export default useQuotesStore;

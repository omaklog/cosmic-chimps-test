import { computed, defineComponent, ref } from "vue";
import { useQuotesStore } from "../../composables";

export default defineComponent({

    name: 'SearchBar',

    setup() {

        const debounceTimeOut = ref();
        const debounceValue = ref('');
        const typeSearch = ['Anime', 'Personaje'];
        const searchParam = ref('Anime')

        const { searchQuotesByTerm, loading } = useQuotesStore();

        return {
            debounceValue,
            loading,
            searchParam,
            typeSearch,
            searchTerm: computed({
                get() {
                    return debounceValue.value;
                },
                set(term: string) {

                    if (term.length < 3) return

                    if (debounceTimeOut.value) clearTimeout(debounceTimeOut.value)
                    debounceTimeOut.value = setTimeout(() => {
                        debounceValue.value = term;
                        searchQuotesByTerm(term, searchParam.value);
                    }, 500);
                }
            }),
        }
    }

})

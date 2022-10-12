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

            typeSearch,

            searchParam,

            searchTerm: computed({
                get() {
                    return debounceValue.value;
                },
                set(val: string) {

                    if (val.length < 3) return

                    if (debounceTimeOut.value) clearTimeout(debounceTimeOut.value)
                    debounceTimeOut.value = setTimeout(() => {
                        debounceValue.value = val;
                        searchQuotesByTerm(val);
                    }, 500);
                }
            })
        }
    }

})

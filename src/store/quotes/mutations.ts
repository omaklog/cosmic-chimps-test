import { MutationTree } from 'vuex';
import { QuoteseState } from './state';
import { Quote } from "../../interfaces/quote";


const mutation: MutationTree<QuoteseState> = {
    setQuotes( state: QuoteseState, quotes: Quote[]) {
        state.quotes = quotes;
        state.loading = false;
    }
}


export default mutation;

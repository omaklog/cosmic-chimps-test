import { createStore } from 'vuex';

import quotesModule from './quotes/'
import { QuoteseState } from './quotes/state'

export interface StateInterface {
    quotes: QuoteseState,
}

export default createStore<StateInterface>({
    modules: {
        quotes: quotesModule,
    }
})

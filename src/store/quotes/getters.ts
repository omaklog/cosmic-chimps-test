import { GetterTree } from 'vuex';
import { QuoteseState } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<QuoteseState, StateInterface> = {
    someGetter( state: QuoteseState) {
        return state.dark;
    }
}



export default getters;

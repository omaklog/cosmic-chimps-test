import { GetterTree } from 'vuex';
import { ThemeState } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<ThemeState, StateInterface> = {
    someGetter( state: ThemeState) {
        return state.dark;
    }
}



export default getters;

import { MutationTree } from 'vuex';
import { ThemeState } from './state';


const mutation: MutationTree<ThemeState> = {
    setTheme( state: ThemeState) {
        state.dark = !state.dark;
    }
}


export default mutation;

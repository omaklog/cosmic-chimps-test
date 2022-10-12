import { createStore } from 'vuex';

import themeModule from './theme/'
import { ThemeState } from './theme/state'

export interface StateInterface {
    theme: ThemeState,
}

export default createStore<StateInterface>({
    modules: {
        theme: themeModule,
    }
})

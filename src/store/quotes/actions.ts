import { ActionTree } from 'vuex';
import { QuoteseState } from './state';
import { StateInterface } from '../index';
import searchApi from "../../apis/searchApi";
import { AxiosResponse } from "axios";


const actions: ActionTree<QuoteseState, StateInterface> = {
    async searchQuotesByTerm({ state, commit }, params) {

        state.loading = true;

        const url = params.searchParam === 'Anime' ? `/anime?title=${params.query}&page=1` : `/character?name=${params.query}`
        await searchApi.get(url).then((response: AxiosResponse) => {
            commit('setQuotes', response.data)
            console.log(response)
        }).catch((error) => {
            console.log(error)
            commit('setQuotes', [])
        })


    }
}


export default actions;

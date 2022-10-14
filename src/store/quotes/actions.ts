import { ActionTree } from 'vuex';
import { QuoteseState } from './state';
import { StateInterface } from '../index';
import searchApi from "../../apis/searchApi";
import { AxiosResponse } from "axios";
import { insertResults, getResults } from "../../database/queryDb";


const actions: ActionTree<QuoteseState, StateInterface> = {
    async searchQuotesByTerm({ state, commit }, params) {

        state.loading = true;

        if(!window.navigator.onLine){
            const url = params.searchParam === 'Anime' ? `/anime?title=${params.query}&page=1` : `/character?name=${params.query}`
            await searchApi.get(url).then(async (response: AxiosResponse) => {
                const results = await insertResults(response.data);
                commit('setQuotes', results);
            }).catch((error) => {
                commit('setQuotes', []);
            })
        }else{
            commit('setQuotes', await getResults(params));
        }

    }
}


export default actions;

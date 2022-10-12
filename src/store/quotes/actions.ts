import { ActionTree } from 'vuex';
import { QuoteseState } from './state';
import { StateInterface } from '../index';
import searchApi from "../../apis/searchApi";


const actions: ActionTree<QuoteseState, StateInterface> = {
    async searchQuotesByTerm({ state }, query) {

        console.log("query", query)
        state.loading = true;
        const promiseArr = [
            searchApi.get(`/anime?title=${query}&page=1`),
            searchApi.get(`/character?name=${query}&page=1`),
        ]

        const [animeResp, characterResp] = await Promise.all(promiseArr);

        console.log(animeResp, characterResp)

    }
}


export default actions;

import { Quote } from "../../interfaces/quote";

export interface QuoteseState {
    quotes: Quote[];
    loading: boolean;
}

function state(): QuoteseState {
    return {
        quotes: [],
        loading: false
    }
}

export default state;

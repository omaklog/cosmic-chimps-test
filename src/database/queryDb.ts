import { createDatabase } from "./index";
import { Quote } from "../interfaces/quote";
import { addRxPlugin } from 'rxdb';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';

addRxPlugin(RxDBQueryBuilderPlugin);

export const insertResults = async (quotes: Quote[]) => {
    const db = await createDatabase();
    const results = []
    for (const quote of quotes) {
        const quoteId = genetateId(quote);
        //console.log(await getRate(quoteId))
        const quoteToInsert = {
            ...quote,
            quoteId,
            rate: 3,
        }
        results.push(quoteToInsert);
        await db.collections.quotes.insert(quoteToInsert).catch((error) => {
            console.log("error--->", error)
        })
    }
    return results;
}


export const getResults = async (params: { query: string, searchParam: string }) => {

    const db = await createDatabase();

    const selector = params.searchParam === 'Anime' ? { anime: { $regex: `.*${params.query}.*` } } : { character: { $regex: `.*${params.query}.*` } }

    const results = await db.collections['quotes'].find({ selector }).exec()

    return mapResults(results)
}

const getRate = async (id: string) => {
    const db = await createDatabase();

    const results = await db.collections['quotes'].findOne().where('quoteId').equals(id).exec();
    console.log("rate obtained", results.rate)
    return results ? results.rate : 0;
}

export const genetateId = (quote: Quote) => {
    const { anime, character, quote: quoteString } = quote;
    return `${hashCode(anime)}-${hashCode(character)}-${hashCode(quoteString.split(' ')[0])}`
}

const hashCode = (text: string) => {
    let hash = 0, i, chr;
    if (text.length === 0) return hash;
    for (i = 0; i < text.length; i++) {
        chr = text.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    if (hash < 0) {
        hash *= -1;
    }
    return hash;
}

const mapResults = (quotes: Quote[]) => {
    return quotes.map(({ quoteId, quote, anime, character, rate }) => {
        return { quoteId, quote, anime, character, rate }
    })
}




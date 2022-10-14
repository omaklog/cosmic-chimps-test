import { createDatabase } from "./index";
import { Quote } from "../interfaces/quote";
import { addRxPlugin } from 'rxdb';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
import jikanApi from "../apis/jikanApi";

addRxPlugin(RxDBQueryBuilderPlugin);

let animeData = {
    lastAnime: '',
    lastImageUrl: ''
};

export const insertResults = async (quotes: Quote[]) => {
    console.log("animeData...-<>>>>>", animeData)
    const db = await createDatabase();
    const results = []
    for (const quote of quotes) {
        const quoteId = generateId(quote);
        const rate = await getRate(quoteId);
        const image = await getImage(quote.anime, quoteId);
        console.log("quoteId...-<>>>>>", quoteId)
        const quoteToInsert = {
            ...quote,
            quoteId,
            rate,
            image
        }
        results.push(quoteToInsert);
        await db.collections.quotes.upsert(quoteToInsert).catch((error) => {
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


export const updateRate = async (quote: Quote) => {
    const db = await createDatabase();
    await db.collections.quotes.upsert(quote);
}


const getRate = async (id: string): Promise<number> => {
    const db = await createDatabase();

    const result = await db.collections['quotes'].findOne().where('quoteId').equals(id).exec();
    return result ? result.rate : 0;
}

const getImage = async (anime: string, quoteId: string): Promise<string> => {
    if (animeData.lastAnime === anime) return animeData.lastImageUrl;

    animeData.lastAnime = anime;

    const db = await createDatabase();
    const result = await db.collections['quotes'].findOne().where('quoteId').equals(quoteId).exec();

    if (result === null || result.image === '') {
        const { data } = await jikanApi.get(`anime?q=${anime}&sfw`)
        animeData.lastImageUrl = data.data[0].images.jpg.image_url
        return data.data.length ? animeData.lastImageUrl : ''
    }

    return result.image;
}

export const generateId = (quote: Quote): string => {
    const { anime, character, quote: quoteString } = quote;
    return `${hashCode(anime)}-${hashCode(character)}-${hashCode(quoteString.split(' ')[0])}`
}

const hashCode = (text: string): number => {
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

const mapResults = (quotes: Quote[]): Quote[] => {
    return quotes.map(({ quoteId, quote, anime, character, rate }) => {
        return { quoteId, quote, anime, character, rate }
    })
}




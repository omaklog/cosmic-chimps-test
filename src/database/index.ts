import { createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/dexie';

export async function createDatabase(){
    const cosmicDatabase = await createRxDatabase({
        name: 'quotes',
        storage: getRxStorageDexie(),
        ignoreDuplicate: true
    });


    const quotesSchema = {
        title: 'quotes schema',
        version: 0,
        primaryKey: 'quoteId',
        type: 'object',
        properties: {
            quoteId: {
                type: 'string',
                maxLength: 100 // <- the primary key must have set maxLength
            },
            anime: {
                type: 'string'
            },
            character: {
                type: 'string'
            },
            quote: {
                type: 'integer',
                minimum: 0,
                maximum: 250,
                multipleOf: 1
            },
            rate: {
                type: 'number'
            },
        },
        required: ['quoteId', 'anime', 'character', 'quote']
    }

    await cosmicDatabase.addCollections({
        quotes: {
            schema: quotesSchema
        },
    });

    return cosmicDatabase;
}



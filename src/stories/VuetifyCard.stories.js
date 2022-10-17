import QuoteVuetifyCard from "../components/quote-vuetify-card/QuoteVuetifyCard.vue";
import {quotes} from "./mopckData/quotes.js";


export default {
    title: 'Example/VuetifyCard',
    component: QuoteVuetifyCard,
}

const Template = (args) => ( {
    components: { QuoteVuetifyCard },


    setup() {
        console.log("args======================>", args)
        return {
            args
        };
    },

    template: `<QuoteVuetifyCard v-bind="args"/>`
} )

export const Rating = Template.bind({});
Rating.args = {
    rating: true,
    length: 5,
    quote: quotes[1],
}


export const Length = Template.bind({});
Length.args = {
    rating: true,
    length: 3,
    quote: quotes[3],
}

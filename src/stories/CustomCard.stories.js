import QuoteCustomCard from "../components/quote-custom-card/QuoteCustomCard.vue";
import { quotes } from "./mopckData/quotes.js";

export default {
    title: 'Example/CustomCard',
    component: QuoteCustomCard,
}

const Template = (args) => ( {
    components: { QuoteCustomCard },

    setup() {
        return {
            args
        };
    },

    template: '<QuoteCustomCard v-bind="args"/>'
} )


export const Simple = Template.bind({});
Simple.args = {
    rating: false,
    length: 5,
    quote: quotes[2]
}

export const Rating = Template.bind({});
Rating.args = {
    rating: true,
    length: 4,
    quote: quotes[1]
}


export const Loading = Template.bind({});
Loading.args = {
    loading: true,
    length: 4,
    quote: quotes[1]
}

export const Length = Template.bind({});
Length.args = {
    rating: true,
    length: 3,
    quote: quotes[3]
}


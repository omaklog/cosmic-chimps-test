import QuoteCssCard from "../components/quote-css-card/QuoteCssCard.vue";
import {quotes} from "./mopckData/quotes.js";

export default {
    title: 'Example/CssCard',
    component: QuoteCssCard,
}

const Template = (args) => ( {
    components: { QuoteCssCard },

    setup() {
        return {
            args,
        };
    },

    template: '<QuoteCssCard  v-bind="args"/>'
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
    length: 5,
    quote: quotes[2]
}

export const Rounded = Template.bind({});
Rounded.args = {
    rounded: true,
    rating:true,
    length: 5,
    quote: quotes[2]
}

export const Loading = Template.bind({});
Loading.args = {
    rounded: true,
    rating:true,
    loading:true,
    length: 5,
    quote: quotes[2]
}

export const Length = Template.bind({});
Length.args = {
    rating: true,
    length: 3,
    quote: quotes[3]
}

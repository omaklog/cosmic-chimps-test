import axios from 'axios'


const searchApi = axios.create({
    baseURL: 'https://animechan.vercel.app/api/quotes',
});

export default searchApi;


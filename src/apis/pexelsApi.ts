import axios from 'axios'


const pexelsApi = axios.create({
    baseURL: 'https://api.pexels.com/v1',
    headers: {
        Authorization: '563492ad6f9170000100000162509d2cfc5e4f5cbfd5ddb2c4a8210e',
    },
});

export default pexelsApi;


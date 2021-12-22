import axios from 'axios';

export default axios.create({
    baseURL : 'https://www.enanyang.my/api/get/home/articles'
})

// https://www.enanyang.my/api/get/home/articles?page=11
import axios from 'axios';

const apiStore = axios.create({
    baseURL: "https://fakestoreapi.com"
})

export {apiStore}
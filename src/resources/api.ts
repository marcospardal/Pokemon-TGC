import axios from 'axios';

const key = process.env.REACT_APP_API_KEY;

export const api = axios.create({
  baseURL: 'https://api.pokemontcg.io/v2',
  headers: {
    'X-Api-Key': key
  }
})
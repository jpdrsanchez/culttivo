import axios from "axios";

export const client = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public'
})

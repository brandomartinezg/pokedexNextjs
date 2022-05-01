import axios from "axios";
import { Agent } from 'https';

const pokeApi = axios.create({baseURL:'https://pokeapi.co/api/v2', 
    httpsAgent: new Agent({
        rejectUnauthorized: false
    })
});

export default pokeApi;
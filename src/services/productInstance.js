import axios from "axios";

export const productInstance  = axios.create({
    baseURL: "http://localhost:5000/productos",
    //timeout: 100,
    //headers: {'X-Custom-Header': 'foobar'}
});
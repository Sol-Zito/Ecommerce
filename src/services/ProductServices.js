// traer todas las funciones que hacen peticiones a la api

import {productInstance} from "./productInstance";

export const getProducts = () => {
    return productInstance.get();
};

export const deleteProduct = (id) =>{
    return productInstance.delete(`/${id}`);
}

export const updateProducts = (id, data) =>{
    return productInstance.patch(`/${id}`, data);
}

export const getProductsById = (id) =>{
    return productInstance.get(`/${id}`);
}

export const createNewProduct = (data) => {
    return productInstance.post("/", data);
}
import React, {useState, createContext} from 'react';
import {products as productsData} from './data';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [products, setProducts] = useState(productsData);

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    );
};
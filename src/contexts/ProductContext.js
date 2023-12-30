import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    // Product state
    const [products, setProducts] = useState([])
    //  Fetch products from fake store API
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, []);
    return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
}

export default ProductProvider;
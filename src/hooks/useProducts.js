import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://morning-ridge-85275.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return [products];
};
export default useProducts;

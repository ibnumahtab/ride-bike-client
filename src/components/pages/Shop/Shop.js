import React from 'react';
import useProducts from '../../../hooks/useProducts'
import Footer from '../../sharedComponents/Footer/Footer';
import AppBar from '../../sharedComponents/AppBar/AppBar';
import ProductCard from '../../sharedComponents/ProductCard/ProductCard';

const Shop = () => {
    const [products] = useProducts();
    return (
        <>
            <AppBar></AppBar>
            <div>
                <div className='container mx-auto py-24'>
                    <h2 className='text-center sec-title pb-12 text-4xl'>
                        Lets go shopping
                    </h2>

                    <div className='grid grid-cols-1 md:grid-cols-3 md:w-5/6 md:mx-auto gap-y-16 gap-x-4'>
                        {products.map((product) => (
                            <ProductCard
                                key={product._id}
                                product={product}
                            ></ProductCard>
                        ))}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Shop;
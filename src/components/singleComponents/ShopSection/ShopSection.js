import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import ProductCard from '../../sharedComponents/ProductCard/ProductCard';

const ShopSection = () => {
    const [products] = useProducts();
    return (
        <div>
            <div className='container mx-auto py-24'>
                <h2 className='text-center sec-title pb-12 text-4xl'>
                    Lets go shopping
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-3 md:w-4/5 md:mx-auto gap-y-16 gap-x-4'>
                    {products.slice(0, 6).map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="bg-primary text-white px-4 py-1 mt-8 rounded">
                        <Link to="/shop">Explore More Products</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShopSection;
import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, productName, productThumb, productRating, productType, productPrice, productPrevPrice } =
        product;
    return (
        <div className='shadow-xl p-4'>
            <div className='relative'>
                <img src={productThumb} alt='' />
                <span className='px-4 py-1 text-white font-bold absolute top-0 left-0 bg-primary'>
                    Sale
                </span>
            </div>
            <div className='text-center mt-4'>
                <Rating
                    emptySymbol={
                        <FaRegStar className='text-yellow-400'></FaRegStar>
                    }
                    fullSymbol={<FaStar className='text-yellow-400'></FaStar>}
                    initialRating={productRating}
                    readonly
                ></Rating>
            </div>
            <h2 className='text-center text-2xl text-primary font-bold pt-2'>
                {productName}
            </h2>
            <h3 className='text-center text-xl pb-8'>{productType}</h3>
            <div className='flex justify-between'>
                <h2> $ {productPrice}</h2>
                <del className='text-gray-400'> $ {productPrevPrice}</del>
            </div>
            <div className='text-center mt-8'>
                <button className='bg-primary text-white px-4 py-1 rounded'>
                    <NavLink className='flex items-center' to={`/shop/${_id}`}>
                        <p className="pr-4">View Details</p> 
                    </NavLink>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
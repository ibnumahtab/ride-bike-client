import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useProducts from '../../../hooks/useProducts';
import Footer from '../../sharedComponents/Footer/Footer';
import Navigation from '../../sharedComponents/AppBar/AppBar';
import { Link } from 'react-router-dom';

const SingleProduct = () => {
    const { id } = useParams();
    const [products] = useProducts([]);
    const product = products?.find((val) => val._id === id);
    return (
        <>
            <Navigation></Navigation>
            <div></div>
            <div className='container mx-auto py-12'>
                <div className='flex md:flex-row  flex-col'>
                    <div className='w-full md:w-1/2'>
                        <img src={product?.productThumb} alt='' />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <h2 className='text-2xl font-semibold'>
                            {product?.productName}
                        </h2>
                        <div className='flex mt-4'>
                            <Rating
                                emptySymbol={
                                    <FaRegStar className='text-yellow-400'></FaRegStar>
                                }
                                fullSymbol={
                                    <FaStar className='text-yellow-400'></FaStar>
                                }
                                initialRating={product?.productRating}
                                readonly
                            ></Rating>
                        </div>
                        <p className='py-4'>{product?.productDesc}</p>
                        <div className='flex justify-between'>
                            <h2>Price: ${product?.productPrice}</h2>
                            <h2 className='text-gray-400'>
                                Previous Price:{" "}
                                <del>${product?.productPrevPrice}</del>
                            </h2>
                        </div>
                        <div className='flex mt-8'>
                            <h2 className='w-1/2'>Size</h2>
                            <div>
                                {product?.size.map((e) => (
                                    <button className='border-2 px-4 py-2 mr-2 border-red-700'>
                                        {e}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='flex my-8'>
                            <h2 className='w-1/2'>Suspension</h2>
                            <div className='w-1/2'>
                                {product?.Suspension.map((e) => (
                                    <button className='border-2 my-1 px-4 py-2 mr-2 border-red-700'>
                                        {e}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='flex my-8'>
                            <h2 className='w-1/2'>Color</h2>
                            <div>
                                {product?.color.map((e) => (
                                    <button className='border-2 my-1 px-4 py-2 mr-2 border-red-700'>
                                        {e}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='flex my-8'>
                            <h2 className='w-1/2'>Brand</h2>
                            <h2>: {product?.brandName}</h2>
                        </div>
                        <div className='flex my-8'>
                            <h2 className='w-1/2'>Product Type</h2>
                            <h2>: {product?.productType}</h2>
                        </div>
                        <div className='flex my-8'>
                            <h2 className='w-1/2'>Availability</h2>
                            <h2>: {product?.stock} in stock</h2>
                        </div>
                        <div>
                            <button className='px-12 py-2 bg-primary text-white'>
                                <Link to={`/checkout/${product?._id}`}>Order Now</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default SingleProduct;
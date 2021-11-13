import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';

const ProductCard = ({ product }) => {
	console.log(product);
	const {
		_id,
		productName,
		productThumb,
		productRating,
		productType,
		productPrice,
		productDesc,
		stock,
	} = product;
	return (
		<div className='border border-gray-600 p-16 shadow-inner'>
			<div className='border border-gray-400 shadow-lg p-3'>
				<div className='p-3'>
					<img
						className='rounded md:h-60 w-full'
						src={productThumb}
						alt=''
					/>
				</div>
				<div className='p-3'>
					<div className='flex justify-between'>
						<div className=''>
							<h1 className='text-gray-900 font-bold text-2xl'>
								{productName}
							</h1>
							<p className='text-gray-500 leading-8 text-md font-bold tracking-wide'>
								Brand: {productType}
							</p>
						</div>
						<div className='text-gray-500'>
							<span className='text-4xl text-yellow-600 font-bold'>
								{productPrice}$
							</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-10'>
						<div className='py-2 text-yellow-500'>
							<Rating
								emptySymbol={
									<FaRegStar className='text-yellow-400'></FaRegStar>
								}
								fullSymbol={
									<FaStar className='text-yellow-400'></FaStar>
								}
								initialRating={productRating}
								readonly
							></Rating>
						</div>
						<div className='py-2 text-green-500'>
							<p>Stock: {stock}</p>
						</div>
					</div>

					<h2 className='text-gray-400 mt-4'>
						{productDesc.slice(0, 150)} . . .
					</h2>

					<div className='pt-4'>
						<NavLink
							className='transition duration-500 text-gray-900 border border-gray-500 bg-white hover:bg-gray-500 hover:text-white px-4 py-2 font-semibold  mr-4 d-button block text-center'
							to={`/shop/${_id}`}
						>
							{' '}
							Details
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

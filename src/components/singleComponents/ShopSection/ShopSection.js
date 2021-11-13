import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import ProductCard from '../../sharedComponents/ProductCard/ProductCard';

const ShopSection = () => {
	const [products] = useProducts();
	return (
		<div>
			<div className='container mx-auto py-12'>
				<div className='container text-center pb-10 mx-auto'>
					<img
						className='mx-auto text-center w-24'
						src='https://i.ibb.co/Wyc4yth/Ride-Bike-Favicon.png'
						alt=''
					/>
					<h2 className='text-4xl font-bold text-gray-900'>
						Ride With Your Favourite Bike
					</h2>
					<p className='text-lg leading-6 py-4'>
						All available Awesome Features Bikes you can choose from
						here. Click on 'Purchase' Button and know details of
						each.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 md:w-4/5 md:mx-auto gap-12'>
					{products.slice(0, 6).map(product => (
						<ProductCard
							key={product._id}
							product={product}
						></ProductCard>
					))}
				</div>
				<div className='text-center mt-12'>
					<button className='md:py-3 md:px-24 px-8 py-3 border text-white hover:text-gray-700 text-lg font-semibold  bg-gray-900 hover:bg-white border-gray-700 transition duration-500 ease-in-out'>
						<Link to='/shop'>Explore All</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ShopSection;

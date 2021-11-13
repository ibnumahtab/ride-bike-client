import React from 'react';
import useProducts from '../../../hooks/useProducts';
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
					<div className='container text-center pb-10 mx-auto'>
						<img
							className='mx-auto text-center w-24'
							src='https://i.ibb.co/Wyc4yth/Ride-Bike-Favicon.png'
							alt=''
						/>
						<h2 className='text-4xl font-bold text-gray-900'>
							Enjoy Shopping With Us
						</h2>
						<p className='text-lg leading-6 py-4'>
							All available Awesome Features Bikes you can choose
							from here. Click on 'Purchase' Button and know
							details of each.
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 md:w-5/6 md:mx-auto gap-12'>
						{products.map(product => (
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

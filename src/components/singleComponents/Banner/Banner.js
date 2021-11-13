import React from 'react';
import { NavLink } from 'react-router-dom';
import './Banner.css';

// home page banner

const Banner = () => {
	return (
		<div className=' banner-container'>
			<div className='container m-auto px-2 py-12 md:py-20 lg:py-40 full-width-all'>
				<div className='slider h-4/5 text-center'>
					<div className='text-white p-10'>
						<h1 className='md:text-2xl text-xl font-extrabold'>
							{' '}
							<span className='text-yellow-500'>
								RideBike{' '}
							</span>{' '}
							We Keep You Riding!
						</h1>
						<br />
						<h1 className='md:text-6xl text-3xl uppercase'>
							If the ride is more fly, then you must buy.
						</h1>
						<br />
						<h4 className='text-xl mb-10'>
							Riding a race bike is an art - a thing that you do
							because you feel something inside.
						</h4>
						<NavLink
							className='md:py-3 md:px-24 px-8 py-3 border text-white text-lg font-semibold  hover:bg-gray-700 hover:text-white transition duration-500 ease-in-out'
							to='/shop'
						>
							{' '}
							Explore
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;

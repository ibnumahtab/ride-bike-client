import React from 'react';
import Testimonial from '../Testimonial/Testimonial';

const TestimonialSection = () => {
	return (
		<div className='bg-gray-200'>
			<div className='container mx-auto pt-12 pb-12'>
				<div className='container text-center mx-auto'>
					<img
						className='mx-auto text-center w-24'
						src='https://i.ibb.co/Wyc4yth/Ride-Bike-Favicon.png'
						alt=''
					/>
					<h2 className='text-4xl font-bold text-gray-900'>
						Happy Clients!
					</h2>
					<p className='text-lg leading-6 py-4'>
						See, What our Clients say about us!
					</p>
				</div>
				<Testimonial></Testimonial>
			</div>
		</div>
	);
};

export default TestimonialSection;

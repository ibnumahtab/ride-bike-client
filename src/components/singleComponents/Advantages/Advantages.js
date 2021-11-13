import React from 'react';
import { FaAward, FaBiking, FaShippingFast } from 'react-icons/fa';

const Advantages = () => {
	return (
		<div>
			<div className='container mx-auto py-10'>
				<div className='container text-center pb-10 mx-auto'>
					<img
						className='mx-auto text-center w-24'
						src='https://i.ibb.co/Wyc4yth/Ride-Bike-Favicon.png'
						alt=''
					/>
					<h2 className='text-4xl font-bold text-gray-900'>
						Awesome Advantages!
					</h2>
					<p className='text-lg leading-6 py-4'>
						All available Awesome Features Bikes you can choose from
						here. Click on 'Purchase' Button and know details of
						each.
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div className='bg-primary text-white text-justify px-8 py-3'>
						<div className='flex justify-around items-center'>
							<div>
								<FaBiking className='text-6xl my-8 mx-auto text-white'></FaBiking>
							</div>
							<h2 className='text-4xl font-semibold'>
								Free Trial
							</h2>
						</div>
						<h3 className='pb-3'>
							The instinct of trail ride for knowing of bike.
							Which is totally awesome
						</h3>
						<button className='bg-white px-4 py-2 m-2 text-primary rounded'>
							Details
						</button>
					</div>
					<div className='bg-primary text-white text-justify px-8 py-3'>
						<div className='flex justify-around items-center'>
							<div>
								<FaShippingFast className='text-6xl my-8 mx-auto text-white'></FaShippingFast>
							</div>
							<h2 className='text-4xl font-semibold'>
								Free Shipping
							</h2>
						</div>
						<h3 className='pb-3'>
							Regarding the discussion of the shipping its all
							without any cost.
						</h3>
						<button className='bg-white px-4 py-2 m-2 text-primary rounded'>
							Details
						</button>
					</div>
					<div className='bg-primary text-white text-justify px-8 py-3'>
						<div className='flex justify-around items-center'>
							<div>
								<FaAward className='text-6xl my-8 mx-auto text-white'></FaAward>
							</div>
							<h2 className='text-4xl font-semibold'>
								Get Award
							</h2>
						</div>
						<h3 className='pb-3'>
							Most importantly it's warranty for 4 years. It's
							huge! Cool Huh!
						</h3>
						<button className='bg-white px-4 py-2 m-2 text-primary rounded'>
							Details
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Advantages;
